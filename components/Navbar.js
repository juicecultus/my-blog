import Link from 'next/link';
import { useState } from 'react';

import {
  Button,
  Collapse,
  Form,
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const TopBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='container'>
      <Navbar color='faded' light expand='md'>
        <NavbarBrand href='/' className='mr-auto'>
          All Mums Talk
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/lifestyle'>Lifestyle</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/lookbook'>LookBook</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/reviews'>Reviews</NavLink>
            </NavItem>
            <NavLink href='/travel'>Travel</NavLink>
            <NavItem></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Form className='container form-inline my-2 my-lg-0'>
        <Input
          className='form-control mr-md-2'
          type='text'
          placeholder='Search'
        ></Input>
        <Button className='btn btn-secondary my-2 my-sm-0' type='submit'>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default TopBar;
