import React from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';

//  T H I S     I S      T H E     S H A D R     M O D A L

const customStyles = {

    modal: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: 'null'
    },

    content: {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        backgroundColor       : '#2a2a2a',
        color: 'white',
        borderColor: 'black',
        borderWidth: '1.5px'
    },

    overlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgb(27,27,27, .8)'
        
    }
}

Modal.setAppElement('body')

class TestModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#FF8921';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <Button style={{backgroundColor: '#FF8921'}} onClick={this.openModal}>OPEN</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>TITLE</h2>




          <div>CONTENT</div>
         



         
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal}>DONE</Button>
        </Modal>
      </div>
    );
  }
}

export default TestModal;