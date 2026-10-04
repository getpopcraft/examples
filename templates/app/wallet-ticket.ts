// KILOVOLT's presale ticket (templates/src/themes/festival-presale-family-a-shared.ts `ticket`), on the main stage at night.
import { ticket } from '@popcraft/kit/templates/themes/festival-presale-family-a-shared'
import { KILOVOLT } from '@popcraft/kit/templates/themes/festival-presale-electronic-kit'

const official = ticket(KILOVOLT)

export default { ...official, id: 'wallet-ticket' }
