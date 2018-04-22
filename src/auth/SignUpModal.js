import React from 'react';
import Modal from 'react-modal';
import { Button }from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap'

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

class SignUpModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      nestedModal: false,
      closeAll: false,

      user: 
            {
            name: '',
            email: '',
            screenname: '',
            password: ''
            }
    };
    // og modal
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    // nested modal
    this.toggleNested = this.toggleNested.bind(this)
    this.closeAll = this.closeAll.bind(this)


    //special modal binds for input
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

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

  // nested modal methods 

  toggleNested() {
    this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: false
     });
  }

toggleAll() {
    this.setState({
        nestedModal: !this.state.nestedModal,
        closeAll: true
    });
}

  closeAll() {
    this.setState({
      modalIsOpen: false,
      nestedModal: false
    })
  }




  // special methods

  handleChange(event) {
    this.setState({
        
        [event.target.name]: event.target.value,
    
    })
}

handleSubmit(event) {
  
  fetch('http://localhost:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({user: this.state}),
      headers: new Headers({
          'Content-Type': 'application/json'
      })
  }).then(
      (response) => response.json()
  ).then((data) => {
      this.props.setScreenname(data.user)
      localStorage.setItem('screenname', data.user.screenname)
      this.props.setToken(data.sessionToken);
      
  }).catch(function(error) {
    return
    // set state to return an error state and render an or alert
  })
  
  event.preventDefault();
}



  render() {
    return (
      <div>
        <p style={{color: '#FF8921', position: 'relative', bottom: '.3em'}} onClick={this.openModal}>need an account? sign up</p>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="code of conduct"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}><center>shadr code of conduct</center></h2>
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
            <br />

          <Modal
          isOpen={this.state.nestedModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.toggleNested}
          style={customStyles}
          contentLabel="sign up"
        >
              <h2 ref={subtitle => this.subtitle = subtitle}><center>sign up</center></h2>
              <br />
              <br />
                         <Form>
                <FormGroup>
                    
                    <Input type="text" name="name" id="name" placeholder="enter your name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <br />
                    <Input type="email" name="email" id="email" placeholder="enter a valid email"  onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    
                    <br />
                    <Input type="text" name="screenname" id="screenname" maxLength="10" placeholder="screenname up to 10 characters" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <br />
                    <Input type="password" name="password" id="password" minLength="6" placeholder="password with at least six characters" onChange={this.handleChange} />
                </FormGroup>
                </Form>
                
                <br />
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeAll}>nevermind, cancel</Button>
          
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal} onClick={this.handleSubmit}>sign me up</Button>
          </Modal>

          <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal}>this isn't for me</Button>
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.toggleNested} >I agree, continue</Button>
          <br />
          <br />
        </Modal>
      </div>
    );
  }
}



// second button needs to toggle a nested modal
export default SignUpModal;