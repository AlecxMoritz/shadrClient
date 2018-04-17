import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

class UpdateShade extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render() {
      return (
        <div>
          <Button color="danger" onClick={this.toggle}>edit</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{localStorage.getItem('screenname')}</ModalHeader>
            <ModalBody>
              You gonna change some stuff I guess?
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>nevermind</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default UpdateShade;