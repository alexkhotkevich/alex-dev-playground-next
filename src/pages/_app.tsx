// import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { useStore } from 'effector-react'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import { useLocalStorage } from 'hooks'
import { $theme, setTheme } from 'models/gui'
import { dark, light } from 'theme'
import { Content, LeftMenu, TopAppBar } from 'components'

const enhance = withHydrate()

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useStore($theme)
  const isSystemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useLocalStorage<boolean>('dark')
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])
  useEffect(() => {
    const timeout = setTimeout(() => {
      isDark === undefined && setIsDark(isSystemDark)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [isDark, isSystemDark, setIsDark])

  useEffect(() => {
    setTheme(isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <>
      <Head>
        <title>Alex Dev Playground</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <CssBaseline />
        <TopAppBar />
        <LeftMenu />
        <Content>
          <Component {...pageProps} />
        </Content>
      </ThemeProvider>
    </>
  )
}
export default enhance(MyApp)
