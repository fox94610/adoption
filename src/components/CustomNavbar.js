// @flow

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <Navbar className="custom-nav-bar" default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className="logo" to="/">
            Asana Pet Adoption
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="custom-nav-bar-toggle" />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem
            className="nav-link"
            eventKey={3}
            componentClass={Link}
            href="/news"
            to="/news"
          >
            News
          </NavItem>
          <NavItem
            className="nav-link"
            eventKey={2}
            componentClass={Link}
            href="/about"
            to="/about"
          >
            About
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);
