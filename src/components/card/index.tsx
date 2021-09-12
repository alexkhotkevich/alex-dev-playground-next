import React from 'react'
import { Paper } from '@material-ui/core'

import { useStyles } from './use-styles'

export const Card: React.FC = ({ children }) => {
  const classes = useStyles()

  return <Paper classes={classes}>{children}</Paper>
}
