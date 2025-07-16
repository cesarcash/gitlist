import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import GlobalStylesStyled from './components/Global-styles/Global-styles.ts'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: ':user',
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <GlobalStylesStyled />
      <RouterProvider router={router} />
    </>
  </StrictMode>,
)
