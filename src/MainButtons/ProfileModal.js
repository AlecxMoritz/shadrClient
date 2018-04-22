import React from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';
import PersonalProfileBlock from '../ProfileModal/PersonalProfileBlock';
import PersonalShadeFeed from '../ProfileModal/PersonalShadeFeed';


//  T H I S     I S      T H E     S H A D R     M O D A L

const customStyles = {

    modal: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: 'null',
        overflow: 'scroll'
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
      width: '20em', // <-- This sets the height
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

class ProfileModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      myshade: []
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getMyShades= this.getMyShades.bind(this)
    this.deleteShade = this.deleteShade.bind(this)
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
    this.getMyShades();
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#FF8921';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.getShades();
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

      componentWillMount() {
        this.getMyShades()
      }


  render() {
    return (
      <div>
        <Button style={{backgroundColor: '#FF8921'}} onClick={this.openModal}>profile</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>{localStorage.getItem('screenname')}</h2>
          <br />
        <PersonalProfileBlock />
        <br/>
        <PersonalShadeFeed getMyShades={this.getMyShades} myshades={this.state.myshades} delete={this.deleteShade}/>
        <br />
        <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal}>close</Button>

        </Modal>
      </div>
    );
  }
}

export default ProfileModal;



// 

{/* <PersonalProfileBlock />
<PersonalShadeFeed getMyShades={this.getMyShades} myshades={this.state.myshades} delete={this.deleteShade}/> */}

//