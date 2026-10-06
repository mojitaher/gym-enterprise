import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import PortalProvider from './shared/ui/organisms/portalManager/portalProvider.tsx'
import { queryClient } from './lib/queryClient'
import OfflineGuard from './shared/components/OfflineGuard'

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <PortalProvider>
          <OfflineGuard>
            <App />
          </OfflineGuard>
        </PortalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
