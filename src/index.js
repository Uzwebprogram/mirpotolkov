import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./i18next"
import { BrowserRouter as Router } from 'react-router-dom';
import { AdminProviderAdmin } from './context/admin/adminAdd/context';
import { StretchProvider } from './context/client/stretch_ceilings/context';
import { ChooseProvider } from './context/client/choose/context';
import { ContactProvider } from './context/admin/contact_us/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <AdminProviderAdmin>
        <StretchProvider>
          <ChooseProvider>
            <ContactProvider>
              <App/>
            </ContactProvider>
          </ChooseProvider>
        </StretchProvider>
      </AdminProviderAdmin>
    </Router>
  </React.StrictMode>
);
