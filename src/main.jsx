import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a href="https://thesignalfactory.com" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        Signal Factory
        <br />
        Brand + Creative Studio
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        Meet PIGASUS™
        <br />
        Our internal mascot is magical and logic-defying, yet humble and flawed.
        <br /> If you understand him, you’ll understand us.
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px', textDecoration: 'underline' }}>
        <a href="https://thesignalfactory.com">view work</a>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Overlay />
  </StrictMode>,
)
