import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import initAnimations from './animate'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize simple scroll animations after mount
if (typeof window !== 'undefined') {
  window.requestAnimationFrame(() => {
    initAnimations()
  })
}
