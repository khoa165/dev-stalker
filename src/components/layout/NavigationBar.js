import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ icon, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color='info' dark expand='md'>
      <Container>
        <NavbarBrand>
          <i className={`${icon} mr-2`} /> {title}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/About' className='nav-link'>
                About
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

NavigationBar.defaultProps = {
  title: 'Dev Stalker',
  icon: 'fas fa-code'
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavigationBar;
