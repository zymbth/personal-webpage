import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { PresetWind3Theme } from 'unocss'

export default defineConfig({
  // rules: [],
  presets: [
    presetWind3({ dark: 'class' }),
    presetAttributify({ nonValuedAttribute: true }),
    presetIcons()
  ],
  transformers: [transformerVariantGroup(), transformerDirectives(), transformerAttributifyJsx()],
  content: {
    pipeline: {
      include: [/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html|ts)($|\?)/],
    },
  },
  theme: {
    colors: {
      themeColor: 'var(--theme-color)',
      themeColor1: 'var(--theme-color-1)',
      themeColor2: 'var(--theme-color-2)',
      tgTxt: 'var(--tg-txt-color)',
      tgTxt1: 'var(--tg-txt-color-1)',
      tgTxt2: 'var(--tg-txt-color-2)',
      tgBg: 'var(--tg-bg-color)',
      tgBg1: 'var(--tg-bg-color-1)',
      tgBg2: 'var(--tg-bg-color-2)',
      tgBg3: 'var(--tg-bg-color-3)',
    },
  },
  extendTheme: (theme: PresetWind3Theme) => {
    return {
      ...theme,
      breakpoints: {
        ...theme.breakpoints,
        md: '750px',
        lg: '1200px',
      },
    }
  },
})
