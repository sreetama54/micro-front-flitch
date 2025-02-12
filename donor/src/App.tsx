import React from 'react'
import Square from './Square'
import ReactDOM from 'react-dom/client'

import './index.css'

const App = () => (
  <div className="container">
   <>tick tack toh grid:<Square/></>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)