import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavbarBrand, Container } from 'reactstrap';

const Navbar = ({ icon, title }) => {
  return (
    <Nav className='navbar text-light bg-info'>
      <Container>
        <NavbarBrand>
          <i className={`${icon} mr-2`} /> {title}
        </NavbarBrand>
      </Container>
    </Nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
