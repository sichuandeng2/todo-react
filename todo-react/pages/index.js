// import React, { useState, useRef, useEffect } from 'react'
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
