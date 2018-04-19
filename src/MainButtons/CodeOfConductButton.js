import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CodeOfConductButton extends React.Component {
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
        <Button style={{backgroundColor: '#FF8921'}} onClick={this.toggle}>code of conduct</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>shadr Code of Conduct</ModalHeader>
          <ModalBody>
            just incase you need a refresher ;)
          </ModalBody>
          <ModalFooter>
            <Button style={{backgroundColor: '#FF8921'}} onClick={this.toggle}>close</Button>{' '}
            
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CodeOfConductButton;