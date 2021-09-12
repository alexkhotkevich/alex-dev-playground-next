import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      color: `inherit`,
      backgroundColor: `${theme.palette.background.default}10`,
      backdropFilter: `blur(.5rem) saturate(100%) contrast(50%) brightness(125%)`,
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)
