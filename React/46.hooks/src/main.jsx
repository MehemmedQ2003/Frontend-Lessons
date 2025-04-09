import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserSearchApp from './UserSearchApp/UserSearchApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserSearchApp />
  </StrictMode>,
)
