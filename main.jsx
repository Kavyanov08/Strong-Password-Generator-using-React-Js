import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SampleUseeffect } from './SampleUseeffect'
import { StrongPassword } from './StrongPassword'
import './StrongPassword.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StrongPassword/>
  </StrictMode>,
)
