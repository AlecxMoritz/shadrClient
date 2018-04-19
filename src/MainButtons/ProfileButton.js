import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PersonalProfileBlock from '../ProfileModal/PersonalProfileBlock';
import PersonalShadeFeed from '../ProfileModal/PersonalShadeFeed';
import styled from 'styled-components';





class ProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      myshades: []
      
    };
    this.getMyShades= this.getMyShades.bind(this)
    this.toggle = this.toggle.bind(this);
    this.deleteShade = this.deleteShade.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
    this.getMyShades()
  }


  getMyShades() {
    fetch('http://localhost:8000/shade/mine', {
        method: 'GET',
        headers: new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('token')
        })
    }).then((res) => res.json())
    .then((myshades) => {
        
        return this.setState({ myshades: myshades })
    })
}

      deleteShade(event) {
        localStorage.setItem('shadeid', event.target.id)
        fetch(`http://localhost:8000/shade/delete/${localStorage.getItem('shadeid')}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }) 
        }).then((res) => {
            localStorage.removeItem('shadeid')
            this.getMyShades();
        }
      )
      }

  // component will mount
  componentWillMount() {
    this.getMyShades()
  }

  render() {
    
    return (
      <div>
        <Button style={{backgroundColor: '#FF8921'}} onClick={this.toggle}>profile</Button>
        <Modal style={{backgroundColor: '#575757'}}isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader style={{backgroundColor: '#2a2a2a'}} toggle={this.toggle}>{localStorage.getItem('screenname')}</ModalHeader>
          <ModalBody style={{backgroundColor: '#2a2a2a'}}>
            
              <PersonalProfileBlock />

              <PersonalShadeFeed getMyShades={this.getMyShades} myshades={this.state.myshades} delete={this.deleteShade}/>

          </ModalBody>
          <ModalFooter style={{backgroundColor: '#2a2a2a'}}>
            <Button style={{backgroundColor: '#FF8921'}} onClick={this.toggle}>close</Button>{' '}
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProfileButton;