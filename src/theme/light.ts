import { createTheme } from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors'

export const light = createTheme({
  palette: {
    type: 'light',
    primary: green,
    secondary: orange,
  },
})
