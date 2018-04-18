import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';






export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="#2a2a2a" light expand="md">
          <NavbarBrand style={{color: `#FF8921`, fontSize: '4em'}} href="/">shadr</NavbarBrand>
          
        </Navbar>
      </div>
    );
  }
}