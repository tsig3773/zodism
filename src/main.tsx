import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ContactProvider } from './contexts/ContactContext';
import { ConversationProvider } from './contexts/ConversationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <ContactProvider>
        <ConversationProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConversationProvider>
      </ContactProvider>
    </ThemeProvider>
  </React.StrictMode>
);