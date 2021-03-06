import { macros, theme as defaultTheme } from '../../shared-styles'

export default (theme = defaultTheme) => ({
  viewport: {
    padding: '20px',
    backgroundColor: theme.white,
    position: 'relative',
    fontFamily: theme.bodyFont,
    fontSize: theme.fontSizeBase,
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',

    '&.fullscreen': {
      minHeight: '100vh',
      boxSizing: 'border-box',
    },

    ...macros.mobile(
      {
        padding: '15px',
      },
      theme
    ),
  },

  content: {
    maxWidth: theme.contentWidth,
    lineHeight: theme.lineHeightContent,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})
