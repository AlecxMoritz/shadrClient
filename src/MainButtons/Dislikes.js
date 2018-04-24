import React from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';
import DislikeFeed from '../shade/DislikeFeed'
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
        borderColor: 'rgb(22,22,22)',
        borderWidth: '1.5px',
        borderRadius: '3%',
        overflow: 'scroll',
        height: '30em', 
        width: '20.2em',
        overflow: 'auto' //
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

class Dislikes extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      dislikes: []
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getMyDislikes = this.getMyDislikes.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
    this.getMyDislikes();
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#FF8921';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  getMyDislikes() {
    fetch('http://localhost:8000/dislike/mine', {
        method: 'GET',
        headers: new Headers({
            'Content-Type' : 'application/json',
            'Authorization' : localStorage.getItem('token')
        })
    }).then((res) => res.json())
    .then((dislikes) => {
        
        return this.setState({ dislikes: dislikes })
    })
}

  render() {
    return (
      <div>
        <Button style={{backgroundColor: '#FF8921', display: 'inline-block'}} onClick={this.openModal}>dislikes</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}
          >dislikes</h2>
          <br />
         <DislikeFeed getMyDislikes={this.getMyDislikes} shades={this.state.dislikes}/>
            <br />
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal}>close</Button>
        </Modal>
      </div>
    );
  }
}

export default Dislikes;