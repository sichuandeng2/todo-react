
import {
  ThemeProvider,
  CSSReset,
  theme
} from 'viviui'
import Todolist from './todolist'

function HomePage () {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Todolist />
    </ThemeProvider>
  )
}

export default HomePage
