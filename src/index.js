import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18next"
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminProviderAdmin } from './context/admin/adminAdd/context';
import { StretchProvider } from './context/client/stretch_ceilings/context';
import { ChooseProvider } from './context/client/choose/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AdminProviderAdmin>
        <StretchProvider>
          <ChooseProvider>
          <App/>
          </ChooseProvider>
        </StretchProvider>
      </AdminProviderAdmin>
    </Router>
  </React.StrictMode>
);
