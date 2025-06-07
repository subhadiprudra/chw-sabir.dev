import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeveloperPortfolio from './DeveloperPortfolio';
import HtmlPage from './pages/HtmlPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DeveloperPortfolio />} />
        <Route path="/html-demo" element={<HtmlPage />} />
      </Routes>
    </Router>
  );
}

export default App
