import React, { useState } from 'react';
import 'semantic-ui-less/semantic.less';
import './App.css';
import HomepageLayout from './Components/HomepageLayout.js';
import NavTabs from './Components/NavTabs.js';
import About from './Components/pages/About.js';
import Contact from './Components/pages/Contact.js';
import Projects from './Components/pages/Projects.js';


export default function App(){
  const [currentPage, setCurrentPage] = useState('Home');

//This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
const renderPage = () => {
  if (currentPage === 'Home') {
    return <HomepageLayout />;
  }
  if (currentPage === 'About') {
    return <About />;
  }
  if (currentPage === 'Projects') {
    return <Projects />;
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

