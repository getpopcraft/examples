# Templates

Twenty-five templates in every format PopCraft has, written exactly as PopCraft's own gallery templates are. Twenty-four
are official templates, copied out with `popcraft template new --from <id>`: the gallery's own code, the best worked
examples of their formats there are. The 25th shows your own media. Every one passes every check the official templates
pass.

| Template | What it shows |
|---|---|
| [Product Hunt launch film](video/launch-film.ts) | Scenes with transitions, a music bed, a product window, every scene boundary checked |
| [Hip-hop lyric video](video/music-video-lyrics.ts) | Words landing on the beats the track's own analysis finds |
| [Sale drop reel](video/sale-reel.ts) | A countdown price, captions, a 9:16 master with square and 4:5 cuts |
| [Story ad](video/story-ad.ts) | A three-scene vertical ad |
| [Anime duel](video/anime-short.ts) | The anime engine: characters, effects and camera in scenes |
| [3D App Store preview](video/app-preview-3d.ts) | A phone placed and lit in 3D |
| [Kinetic word swap](video/kinetic-word-swap.ts) | Type that swaps word by word |
| [Animated bar chart](video/chart-bars.ts) | Data that counts and grows |
| [YouTube end screen](video/youtube-end-screen.ts) | Words kept off the slots YouTube fills |
| [Logo sting](video/logo-sting.ts) | A three-second shimmer reveal |
| [Comic issue reel](video/comic-issue-reel.ts) | Panels, lettering and halftone from the comic theme |
| [Launch post with a screenshot](social/screenshot-launch.ts) | **Your own media**: a real product screenshot via `media()`, fitted to every cut |
| [LinkedIn carousel](social/carousel.ts) | A multi-slide carousel |
| [YouTube thumbnails](social/youtube-thumbnails.ts) | A thumbnail set |
| [App Store panorama](social/store-screenshots.ts) | Store screenshots that run on from one to the next |
| [Quote post](social/quote-post.ts) | A typographic quote that builds word by word |
| [Bento landing page](web/landing-bento.ts) | Responsive: desktop, laptop, tablet and phone, a moving hero |
| [Dark pricing page](web/pricing-dark.ts) | A monthly / yearly switch that works |
| [Festival presale site](web/festival-site.ts) | A themed event site |
| [Generate button (Lottie)](web/lottie-generate-button.ts) | A seamless loop that exports to Lottie for a real product |
| [Launch email header](email/launch-header.ts) | An animated GIF header whose message is on its first frame |
| [Lesson deck](slides/lesson-deck.ts) | Slides with click builds and transitions present mode and PPTX know |
| [Onboarding carousel](app/onboarding.ts) | App screens with motion |
| [RPG game UI](app/game-ui.ts) | A game's interface screens |
| [Festival wallet ticket](app/wallet-ticket.ts) | A phone ticket from a theme family's factory |

## Run them

```bash
npm install
npm install -g puppeteer     # once: look and pictures are drawn by the app in a headless Chrome
npm run check                # build every source into build/<id>/, then every official check
npm run look                 # every size at rest, at four moments and under a light and a dark brand kit
npm run pictures             # the gallery's thumbnail, detail still and hover loop
POPCRAFT_TOKEN=pop_… npm run publish     # all of that, then upload to your account (private until you list it)
```

Each source builds into `build/<id>/`: `template.json` (what your account takes), `media/` (its own files),
`<id>.popcraft` (open it in PopCraft), `look/` and `pictures/`.

## Make your own

Start from whichever official template is closest. There are 1,275, and `--from` copies any of them:

```bash
npx popcraft template list launch reel --animated     # best matches first; --format, --platform, --use-case, --kind
npx popcraft template new video/my-launch.ts --from motion-saas-film-product-hunt-launch
npx popcraft template check video/my-launch.ts
```

Read the source you copied before changing it. It names the shared modules it is built from
(`@popcraft/kit/templates/…`), and every one of them is in `node_modules/@popcraft/kit/src/templates/`: the Kit, the
helpers, twelve SaaS style systems, fifty-odd theme kits, the comic and anime engines, 3D, Lottie and the music library.

The checks measure what can be measured: practices, contrast, type sizes, safe areas, real-type layout, responsive web,
brand-kit re-skins, editability, and every cue's motion at every size. They cannot judge composition, so run `look` and
look at every picture. Name what is wrong, fix it, and look again.

The guide is [Making templates](https://popcraft.app/docs/api/templates). An agent should also read [Designing with an
AI agent](https://popcraft.app/docs/api/agents).
