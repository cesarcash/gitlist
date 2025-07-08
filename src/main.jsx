import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'
import GlobalStylesStyled from './components/Global-styles/Global-styles.ts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <GlobalStylesStyled />
      <App />
    </>
  </StrictMode>,
)
