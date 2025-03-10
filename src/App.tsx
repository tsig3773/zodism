import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ConversationAnalysisPage from './pages/ConversationAnalysisPage';
import ContactsPage from './pages/ContactsPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="analysis" element={<ConversationAnalysisPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}

export default App;