import { createTheme } from '@material-ui/core/styles'
import * as CSS from 'csstype'

export const defaultFontSizePx = 16

export const MuiLightTheme = createTheme({
  palette: {
    type: 'light',
  },
})

export const MuiDarkTheme = createTheme({
  palette: {
    type: 'dark',
  },
})

MuiLightTheme.overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        fontSize: `${defaultFontSizePx}px`,
      },
      body: {
        fontFamily: 'Roboto, sans-serif',
        margin: 0,
        boxSizing: 'border-box',
      },
      button: { fontFamily: 'Roboto, sans-serif' },
      input: { fontFamily: 'Roboto, sans-serif' },
      textarea: { fontFamily: 'Roboto, sans-serif' },
      '& .request-gif': {
        opacity: 0,
        width: 0,
        height: 0,
      },
    },
  },
}

MuiDarkTheme.overrides = MuiLightTheme.overrides

declare module '@material-ui/core/styles/createPalette' {
  interface BreakpointOverrides {
    xxs: true
  }
  interface Palette {
    status?: Record<string, CSS.Property.Color>
  }
  interface PaletteOptions {
    status?: Record<string, CSS.Property.Color>
  }
}
