import React from 'react'
import 'materialize-css';




function NavTabs({ currentPage, handlePageChange }) {
    return (
      //<!-- Navigation bar for full screen -->
    <nav class="nav-wrapper">
        <div class="nav-content">
            <ul className="tabs tabs-transparent">
                <li><a href="#Bio" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
                </li>
                <li><a href="#projects" onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
                </li>
                <li><a href="#contact" onClick={() => handlePageChange('About')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
                <li><a href="#home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>Home</a>
                </li>
            </ul>
        </div>
    </nav>

);
}

export default NavTabs;


