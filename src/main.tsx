import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './assets/components/routes/routes'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
)
