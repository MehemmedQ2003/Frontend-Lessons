import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/card/Card.jsx'
import Button from './components/button/Button.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
    <Button />
    <Card />
    <Button />
  </StrictMode>
)
