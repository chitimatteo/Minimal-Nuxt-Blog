export const useTheme = () => {
  const theme = useState<'light' | 'dark' | 'system'>('theme', () => 'system')

  const getSystemPreference = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const applyTheme = () => {
    const html = document.documentElement

    const effectiveTheme =
      theme.value === 'system' ? getSystemPreference() : theme.value

    html.classList.toggle('dark', effectiveTheme === 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light' || saved === 'system') {
      theme.value = saved
    }

    applyTheme()

    if (theme.value === 'system') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme)
    }
  })

  const setTheme = (value: 'light' | 'dark' | 'system') => {
    theme.value = value
    localStorage.setItem('theme', value)
    applyTheme()
  }

  const toggleTheme = () => {
    const systemPref = getSystemPreference()
    const current =
      theme.value === 'system' ? systemPref : theme.value

    const newTheme = current === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return {
    theme,
    setTheme,
    toggleTheme
  }
}
