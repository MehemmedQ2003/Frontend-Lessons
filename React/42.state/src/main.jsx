import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card/Card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title="Card 1" description="Card Description 1" initial_data={1} increase={5} decrease={3} />
    <Card title="Card 2" description="Card Description 2" initial_data={2} increase={5} decrease={3} />
  </StrictMode>,
)
