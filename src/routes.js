import { Route, Routes } from 'react-router-dom';

import Home from './pages/App';
import Subscribe from './pages/Subscribe';

function BrowserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscribe" element={<Subscribe />} />
    </Routes>
  );
}

export default BrowserRoutes;
