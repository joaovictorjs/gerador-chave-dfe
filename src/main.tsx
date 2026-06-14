import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppContextoProvedor from './contextos/appContexto.provedor.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextoProvedor>
      <App />
    </AppContextoProvedor>
  </StrictMode>,
);
