import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ContactProvider } from './contexts/ContactContext';
import { ConversationProvider } from './contexts/ConversationContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ContactProvider>
        <ConversationProvider>
          <Router>
            <App />
          </Router>
        </ConversationProvider>
      </ContactProvider>
    </ThemeProvider>
  </React.StrictMode>,
);