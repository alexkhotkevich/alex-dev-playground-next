import {
  forward,
  createEvent,
  createStore,
  createEffect,
  PageContext,
  restore,
  guard,
  combine,
  sample,
} from 'effector-next'
import { NextRouter } from 'next/router'
import { MouseEvent } from 'react'

export const pageLoadedOnServer = createEvent<PageContext>()
export const pageLoadedOnClient = createEvent<{ query: NextRouter['query']; path: NextRouter['asPath'] }>()
export const buttonClicked = createEvent<MouseEvent<HTMLButtonElement>>()

// const effect = createEffect<void, number>()

const effect = createEffect<{ query: NextRouter['query']; path: NextRouter['asPath'] }, string | string[]>((p) =>
  JSON.stringify(p)
)

export const $data = createStore(null)
export const $clientQuery = restore(pageLoadedOnClient, { query: {}, path: '' })
export const $serverQuery = restore(
  pageLoadedOnServer.map(({ req, query }) => {
    return { query: query, path: req.url }
  }),
  { query: {}, path: '' }
)

const $hasRouteChanged = combine(
  [$serverQuery, $clientQuery],
  ([$serverQuery, $clientQuery]) => $clientQuery.path && $serverQuery.path !== $clientQuery.path
)
$data.on(effect.doneData, (_, result) => result)
$clientQuery.watch((state) => {
  // console.log('$clientQuery', state)
})
$serverQuery.watch((state) => {
  // console.log('$serverQuery', state)
})
$hasRouteChanged.watch((state) => {
  // console.log('$hasRouteChanged', state)
})

pageLoadedOnServer.watch(() => {
  // console.log('pageLoadedOnServer')
})
pageLoadedOnClient.watch(() => {
  // console.log('pageLoadedOnClient')
})

forward({
  from: $serverQuery,
  to: effect,
})

guard({
  source: pageLoadedOnClient,
  filter: $hasRouteChanged,
  target: effect,
})

sample({
  clock: pageLoadedOnClient,
  source: $clientQuery,
  target: $serverQuery,
})

// forward({
//   from: buttonClicked,
//   to: effect,
// })

export const $loading = createStore(false).on(effect.pending, (_, payload) => payload)

// effect.use(() => new Promise(resolve => setTimeout(resolve, 3000, Math.floor(Math.random() * 300))))
