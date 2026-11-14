import React from 'react'
import { createRoot } from 'react-dom/client'
import TesselAgentLanding from './components/ui/tessel-agent-landing'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><TesselAgentLanding /></React.StrictMode>
)
