import { Tab, Tabs, Typography } from '@material-ui/core'
import { Card, MuiTypography } from 'components'
import { useState } from 'react'

const tabItems = [
  { id: 'typograpy', text: 'Typograpy' },
  { id: 'buttons', text: 'Buttons' },
  { id: 'other', text: 'Other' },
]

const tabs: Record<string, JSX.Element> = {
  typograpy: <MuiTypography />,
  buttons: <></>,
  other: <></>,
}

export default function UIKit() {
  const [active, setActive] = useState('typograpy')

  const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: string) => {
    setActive(newValue)
  }

  return (
    <Card>
      <Typography gutterBottom variant="h1">
        UIKit
      </Typography>

      <Tabs value={active} onChange={handleTabChange} variant="fullWidth">
        {tabItems.map(({ text, id }) => (
          <Tab label={text} key={id} value={id} />
        ))}
      </Tabs>

      {tabs[active]}
    </Card>
  )
}
