import './App.scss';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './views/HomePage';
import ContactsPage from './views/ContactsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route
          path='/home'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/contacts'
          element={
            <Layout>
              <ContactsPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
