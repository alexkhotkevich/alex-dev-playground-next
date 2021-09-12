import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CodeStatsIcon, FacebookIcon, GitHubIcon, GraphIcon, InfoIcon, InstagramIcon, Layers, VKIcon } from 'icons'
import Link from 'next/link'
import { useStyles } from './use-styles'
export const LeftMenuList = () => {
  const classes = useStyles()

  return (
    <div className={classes.list} role="presentation">
      <List>
        <ListItem
          button
          component="a"
          href="https://alex-graph-theory.web.app"
          rel="noreferrer noopener"
          target="_blank"
        >
          <ListItemIcon>
            <GraphIcon />
          </ListItemIcon>
          <ListItemText primary="Graph Theory" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://github.com/alexkhotkevich"
          rel="noreferrer noopener"
          target="_blank"
        >
          <ListItemIcon>
            <GitHubIcon />
          </ListItemIcon>
          <ListItemText primary="GitHub" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://codestats.net/users/alexkhotkevich"
          rel="noreferrer noopener"
          target="_blank"
        >
          <ListItemIcon>
            <CodeStatsIcon />
          </ListItemIcon>
          <ListItemText primary="CodeStats" />
        </ListItem>
        <ListItem button component="a" href="https://vk.com/alexkhotkevich" rel="noreferrer noopener" target="_blank">
          <ListItemIcon>
            <VKIcon />
          </ListItemIcon>
          <ListItemText primary="VK" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://www.facebook.com/alexkhotkevich"
          rel="noreferrer noopener"
          target="_blank"
        >
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
        <ListItem
          button
          component="a"
          href="https://www.instagram.com/alexkhotkevich/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </ListItem>
      </List>
      <Divider light variant="middle" />
      <List>
        <Link href="/about" passHref>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link href="/ui-kit" passHref>
          <ListItem button>
            <ListItemIcon>
              <Layers />
            </ListItemIcon>
            <ListItemText primary="UI kit" />
          </ListItem>
        </Link>
      </List>
    </div>
  )
}
