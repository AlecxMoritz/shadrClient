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
      height: '100%',
      width: '100%',
      backgroundColor: 'rgb(27,27,27, .8)'
    }
}

Modal.setAppElement('body')

class CodeOfConductModal extends React.Component {
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
        <Button style={{backgroundColor: '#FF8921'}} onClick={this.openModal}>code of conduct</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <center><h2 ref={subtitle => this.subtitle = subtitle}>shadr code of conduct</h2></center>
          <div><center>just incase you need a little refresher ;)</center></div>
          <hr />
          <br />
          <div>shadr is a platform for personal venting and stress release. Did the drive through down the street get your order wrong again? and again? Has the woman in line ahead of you at the gas station been arguing about a twenty-five cent price difference for the last four minutes? Did that guy in the meeting get all the praise for repeating exactly what you said? Do you feel like you need to shout to the void for a minute? Then read our rules, join shadr, and throw your shade.
          </div>
          <br />
          <div>By making an account on shadr you agree to follow the rules we have set forth. They are as follows:</div>
            <br />
            <div>You must be at least seventeen(17) to use shadr.</div>
            <br />
            <div>You will not use your shadr account in any attempts of cyberbullying.</div>
            <br />
            <div>You will refrain from posting anything condeming about anyone on a basis of: race, sexual orientation or preference, gender identity, sexual identity, gender presentation, or similar basis. </div>
            <br />
            <div>shadr reserves the right for interperation of shades, and may delete your shade without warning it we feel it violates our rules. </div>
            <br />
            <div>You will refrain from specifically targeting a certain memeber of shadr with any of your shades.</div>
            <br />
            <div>You will refrain from posting any personal information about yourself or others. Including but not limited to: names, addresses, work places, or frequented locations.</div>
            <br />
            <div>If asked to cease and desist, you will do so immediately.</div>
            <br />
            <div>Violations of shadr rules will be determined by admins. Decisions are final and the offending shades or users may be deleted without warning. shadr is not requied to save any shades deemed inappropriate for the platform.</div>
            <br />
            <div>shadr reserves the right to terminate any account that engages in inappropriate behaviour without warning.</div>
            <br />
            <br />

            <div>shadr takes the well-being of it's users very seriuosly, and we will not hesitate to act if we feel a memember of our site has acted inappropriately towards other members, or outwardly on our site. We want this platform to be enjoyed by all persons, from all walks of life, and thus we will continue to strive to make this a community for sharing life's frustrations without fear of personal rejections or dejection.</div>
            <br />
            <hr />
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal}>close</Button>
        </Modal>
      </div>
    );
  }
}

export default CodeOfConductModal;