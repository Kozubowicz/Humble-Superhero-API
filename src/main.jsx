import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { HeroesContextProvider } from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesContextProvider>
      <App />
    </HeroesContextProvider>
  </React.StrictMode>
);
