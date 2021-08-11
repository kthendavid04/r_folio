import React, { useState } from 'react';
import 'semantic-ui-less/semantic.less';
import '../App.css';
import NavTabs from './NavTabs';
import Home from './HomepageLayout';
import About from './pages/About';
import Project from './pages/Projects';
import Contact from './pages/Contact';


export default function FolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Project />;
    }
    return <Contact />;
    };
    
  

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}