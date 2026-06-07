import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthContextProvider from './context/AuthContext.jsx';
import CardsContextProvider from './context/CardsContext.jsx';
import StatsContextProvider from './context/StatsContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <CardsContextProvider>
         <StatsContextProvider>
          <App />
        </StatsContextProvider>
      </CardsContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
