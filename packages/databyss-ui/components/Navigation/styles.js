import { theme as defaultTheme } from '../../shared-styles'

export default (theme = defaultTheme) => ({
  pageNav: {
    fontSize: theme.fontSizeS,
    fontFamily: theme.navFont,
    color: theme.mediumGrey,
    margin: '1.2em 0',
    display: 'flex',

    '& a': {
      color: theme.mediumGrey,
    },
  },
  link: {
    color: theme.darkGrey,
    display: 'block',
    lineHeight: '2em',

    '&$inline': {
      display: 'inline',
      lineHeight: '1.3em',
    },
  },
  contentNav: {
    fontFamily: theme.navFont,

    '& $nav': {
      marginBottom: '1em',
    },

    '& $list': {
      minHeight: '2.5em',
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
    },

    '& $left, & $right': {
      display: 'flex',
      flex: 1,
    },

    '& $right': {
      justifyContent: 'flex-end',
    },
  },
  inline: {},
  nav: {},
  list: {},
  left: {},
  right: {},
})
