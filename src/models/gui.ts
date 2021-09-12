import { createStore, createEvent } from 'effector-next'

export const toggleTheme = createEvent({ sid: 'toggleTheme' })
export const setTheme = createEvent<'dark' | 'light'>('setTheme')
export const $theme = createStore('dark', { sid: '$theme' })
  .on(toggleTheme, (state) => (state === 'dark' ? 'light' : 'dark'))
  .on(setTheme, (_state, payload) => payload)
