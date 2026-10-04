// Starts the server, sends a form as the page would, and checks it was kept: `npm test`.
import { spawn } from 'node:child_process'
import { readFileSync, rmSync } from 'node:fs'

rmSync(new URL('./data.json', import.meta.url), { force: true })
const server = spawn(process.execPath, ['server.mjs'], { cwd: new URL('.', import.meta.url).pathname, env: { ...process.env, PORT: '8799' }, stdio: ['ignore', 'pipe', 'inherit'] })
await new Promise(r => server.stdout.once('data', r))
const post = body => fetch('http://localhost:8799/_pc/form', { method: 'POST', headers: { 'content-type': 'application/json', origin: 'http://localhost:8799' }, body: JSON.stringify(body) })
try {
  const ok = await post({ form: 'newsletter', values: { email: 'reader@example.com' } })
  const unknown = await post({ form: 'no-such-form', values: { email: 'x@example.com' } })
  const page = await fetch('http://localhost:8799/')
  const kept = JSON.parse(readFileSync(new URL('./data.json', import.meta.url), 'utf8')).submissions
  console.log(`form sent: ${ok.status} · unknown form: ${unknown.status} · page: ${page.status} · kept: ${kept.length} (${kept[0]?.data.email})`)
  if (ok.status !== 201 || unknown.status !== 404 || page.status !== 200 || kept.length !== 1) process.exitCode = 1
} finally { server.kill() }
