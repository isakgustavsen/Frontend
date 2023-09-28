import { fr } from '@formkit/i18n'
import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './assets/css/tailwind-theme.js' // change to your theme's path

export default defineFormKitConfig({
  locales: { fr },
  locale: 'fr',
  icons: {
    ...genesisIcons,
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  },
})