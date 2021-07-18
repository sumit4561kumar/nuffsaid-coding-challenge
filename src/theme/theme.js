import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#88FCA3',
      contrastText: '#ffffff',
    },
    error: {
      main: '#F56236'
    },
    success: {
      main: '#FCE788'
    },
    tonalOffset: 0.3,
    contrastThreshold: 3,
    type: 'light',
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
})

export default theme
