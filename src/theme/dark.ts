import { createTheme } from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors'

export const dark = createTheme({
  palette: {
    type: 'dark',
    primary: green,
    secondary: orange,
  },
})
