import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

function main() {
  const domNode = document.getElementById('root')

  if (!domNode) {
    throw new Error('No root element found')
  }

  const root = createRoot(domNode)
  root.render(<App />)
}

main()
