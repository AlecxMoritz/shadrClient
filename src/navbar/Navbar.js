import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import styled from 'styled-components';


const Logo = styled.img`
  position: relative;
  margin-bottom: 1.3em;
  margin-left: -.2em;
`;



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
        <Navbar color="#2a2a2a" light expand="md" style={{marginBottom: '-2.5em'}}>
          <NavbarBrand style={{color: `#FF8921`, fontSize: '5em', top: '2em'}}>shadr 
            <Logo src={require('../assets/angryBeFunkyEdit.png')} alt="logo"  height="50px" width="50px" />
          </NavbarBrand>
          
          

        </Navbar>
      </div>
    );
  }
}