import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

function overrideVercelFeedbackWidget() {
  const existingWidget = document.querySelector('vercel-live-feedback')

  if (existingWidget) {
    existingWidget.remove()
  }

  const widget = document.createElement('vercel-live-feedback')
  widget.innerHTML = '<div>Surprise!</div>'
  document.body.append(widget)
}

function main() {
  const domNode = document.getElementById('root')

  if (!domNode) {
    throw new Error('No root element found')
  }

  const root = createRoot(domNode)
  root.render(<App />)

  overrideVercelFeedbackWidget()
}

main()
