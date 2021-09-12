import { createStore, createEvent } from 'effector-next'

export const toggleTheme = createEvent({ sid: 'toggleTheme' })
export const setTheme = createEvent<'dark' | 'light'>('setTheme')
export const $theme = createStore('dark', { sid: '$theme' })
  .on(toggleTheme, (state) => (state === 'dark' ? 'light' : 'dark'))
  .on(setTheme, (_state, payload) => payload)

export const toggleMenu = createEvent()
export const closeMenu = createEvent()
export const openMenu = createEvent()
export const $isMenuOpen = createStore(false)
  .on(toggleMenu, (state) => !state)
  .on(openMenu, (_state) => true)
  .on(closeMenu, (_state) => false)
