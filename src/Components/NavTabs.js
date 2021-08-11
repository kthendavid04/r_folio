import React from 'react';
import 'materialize-css';
import { Navbar , NavItem , Icon } from 'react-materialize';
import 'semantic-ui-less/semantic.less';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function NavTabs({ currentPage, handlePageChange }) {
    return (
      //<!-- Navigation bar for full screen -->
        <Navbar
            alignLinks="right"
            // brand={<a className="brand-logo" href="#">Logo</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            style={{
                backgroundColor:'#2f566f',
                textColor: 'white',
              }} 
            options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
  }}
>
  <NavItem href="#About" onClick={() => handlePageChange('About')}
     className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About
  </NavItem>
  <NavItem href="#Projects" onClick={() => handlePageChange('Projects')}
     className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects
  </NavItem>
  <NavItem href="#Contact" onClick={() => handlePageChange('Contact')}
     className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact
  </NavItem>
  <NavItem href="#Home" onClick={() => handlePageChange('Home')}
     className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home
  </NavItem>
</Navbar>


);
}

export default NavTabs;


