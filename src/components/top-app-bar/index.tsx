import React from 'react'
import { default as NextLink } from 'next/link'

import { AppBar, IconButton, Link as MuiLink, Toolbar } from '@material-ui/core'

import { useLocalStorage } from 'hooks'
import { toggleMenu, toggleTheme } from 'models/gui'
import { useStyles } from './use-styles'
import { BrightnessIcon, MenuIcon } from 'icons'

export const TopAppBar = () => {
  const classes = useStyles()
  const [dark, setDark] = useLocalStorage('dark')

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
          onClick={() => toggleMenu()}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.title}>
          <NextLink href={'/'} passHref>
            <MuiLink variant="h6" color="inherit" underline="none">
              Alex Playground
            </MuiLink>
          </NextLink>
        </div>

        <IconButton
          color="inherit"
          edge="end"
          aria-label="toggle theme"
          onClick={() => {
            toggleTheme()
            setDark(!dark)
          }}
        >
          <BrightnessIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
