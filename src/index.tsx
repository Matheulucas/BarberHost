import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@components/Common/Header/Header';
import Home from "./pages/Home/Home"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);
