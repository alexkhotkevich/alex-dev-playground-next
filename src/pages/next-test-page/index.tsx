import { withStart } from 'effector-next'
import { useEvent } from 'effector-react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { NextTestComponent } from 'components'
import * as Store from 'models/next-test-page'

const enhance = withStart(Store.pageLoadedOnServer)

function NextTestPage() {
  const router = useRouter()
  const pageLoadedOnClient = useEvent(Store.pageLoadedOnClient)

  useEffect(() => {
    pageLoadedOnClient({ query: router.query, path: router.asPath })
  }, [pageLoadedOnClient, router.asPath, router.query])

  return (
    <>
      <Head>
        <title>{`${router.asPath}`}</title>
      </Head>
      <NextTestComponent />
    </>
  )
}

export default enhance(NextTestPage)
