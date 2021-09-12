import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from './use-styles'

export const Content: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid container direction="column" alignItems="center" classes={{ root: classes.root }} className={classes.dusk}>
      {children}
    </Grid>
  )
}
