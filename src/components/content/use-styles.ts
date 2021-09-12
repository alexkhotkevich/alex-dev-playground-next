import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      minHeight: '100vh',
      paddingTop: '6rem',
    },
    dusk: {
      background: `linear-gradient(0deg, rgba(255,0,0,0.25) 0%, rgba(255,128,0,0.25) 15%, rgba(255,255,0,0.25) 30%, rgba(0,0,255,0.25) 75%)`,
    },
  })
)
