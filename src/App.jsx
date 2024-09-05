import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar onPageChange={setCurrentPage} />
      <div style={{ }}> 
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
