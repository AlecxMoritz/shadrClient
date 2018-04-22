import React from 'react';
import Modal from 'react-modal';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap'


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
      height: '500px', // <-- This sets the height
      overflow: 'scroll' //
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

class UpdateShadeModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modal: false,
      text: '',
      shadeid: '',
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setShadeToUpdate = this.setShadeToUpdate.bind(this);
    this.clickMe = this.clickMe.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clickMeToo = this.clickMeToo.bind(this)
  }

  clickMe(event) {
    this.openModal()
    this.setShadeToUpdate()
}

clickMeToo(event) {
  this.toggle()
  this.handleSubmit(event)
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


  // special methods

  setShadeToUpdate() {
    this.setState({
        text: this.props.text,
        shadeid: this.props.id
    })
    console.log(this.props)
    localStorage.setItem('shadeid', this.props.id)
}

handleChange(event) {
  this.setState({
      [event.target.name] : event.target.value
  })
  
}

handleSubmit(event){
  event.preventDefault();
  
  fetch(`http://localhost:8000/shade/update/${localStorage.getItem('shadeid')}`, {
      method: 'PUT',
      body: JSON.stringify({
           shade: this.state 
      }),
      headers: new Headers({
          'Content-Type' : 'application/json',
          'Authorization' : localStorage.getItem('token')
      })
  
  })
  localStorage.removeItem('shadeid')
  {this.props.getMyShades();}
}


  render() {
    return (
      <div>
        <img src={require('../assets/penEdit.png')}  alt="update"  height="25px" width="25px" onClick={this.clickMe}/>


        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{localStorage.getItem('screenname')}</h2>

        <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <br />
                    <textarea maxLength="120" id="text" type="text" name="text" value={this.state.text} style={{height: '15em'}} placeholder="edit your shade" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
              <br />
              <br />
              <br />
              <br />
              <br />
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.clickMeToo}>save</Button>{' '}
              <Button style={{backgroundColor: '#FF8921'}} onClick={this.closeModal}>nevermind</Button>
        </Modal>
      </div>
    );
  }
}

export default UpdateShadeModal;