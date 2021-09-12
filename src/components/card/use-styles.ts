import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: '61.8vw',
      padding: '1.5rem',
      // 50.05% to prevent jagged edge
      backgroundImage: `linear-gradient(-60deg, ${theme.palette.secondary.main}80 50%, ${theme.palette.background.paper} 50.05%)`,
    },
  })
)
