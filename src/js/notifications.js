import { defaults, Stack, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const defaultStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 25,
  firstpos2: 25,
  spacing1: 36,
  spacing2: 36,
  push: 'bottom',
  context: document.body
})

export function showError() {
  error({
    title: 'Ooops',
    text: 'Too many matches found. Please enter a more specific query!',
    icon: 'fas fa-info-circle',
    hide: true,
    closer: true,
    sticker: false,
    destroy: true,
    delay: 125000,

    stack: defaultStack
  })
}
