import React from 'react'
import { useStore, useEvent } from 'effector-react'
import Link from 'next/link'

import { $data, buttonClicked, $loading } from 'models/next-test-page'

export const NextTestComponent = () => {
  const data = useStore($data)
  const loading = useStore($loading)
  const handleClick = useEvent(buttonClicked)

  return (
    <div>
      <h1>Server Page</h1>
      <h2>Store state: {loading ? 'loading...' : data}</h2>
      <button onClick={handleClick}>click to change store state</button>
      <br />
      <br />
      <Link href="/home">to home</Link>
      <br />
      <Link href="/page2">to page2</Link>
      <br />
      <Link href="/">to root</Link>
      <br />
      <br />
    </div>
  )
}
