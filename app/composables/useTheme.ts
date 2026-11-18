import { ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'dtl-theme'
const theme = ref<Theme>('light')

function apply(value: Theme) {
  document.documentElement.dataset.theme = value
  document.documentElement.style.colorScheme = value
}

export function useTheme() {
  function init() {
    if (!import.meta.client) return
    const stored = localStorage.getItem(STORAGE_KEY)
    theme.value = stored === 'dark' || stored === 'light' ? stored : document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
    apply(theme.value)
  }

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, theme.value)
    apply(theme.value)
  }

  return { theme, init, toggle }
}
