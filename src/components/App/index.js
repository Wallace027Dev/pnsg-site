import { useState } from 'react';

import Header from '../Header';
import SideBar from '../SideBar';
import MainContent from '../MainContent';
import Footer from '../Footer';

import { Container } from './styles';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isContentBlurred, setContentBlurred] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
    setContentBlurred(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setSidebarOpen(false);
    setContentBlurred(false);
  };

  return (
    <Container>
      <Header onMenuClick={handleMenuClick} />
      <SideBar isOpen={isSidebarOpen} onLinkClick={handleLinkClick} />
      <MainContent isContentBlurred={isContentBlurred} />
      <Footer />
    </Container>
  );
}

export default App;
