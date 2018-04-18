import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input ,  FormGroup, } from 'reactstrap';
// import Link from 'valuelink'
// import { Input } from 'valuelink/tags.jsx'

// Form, Input

class SignUpModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
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

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    toggle() {
        this.setState({
            modal: !this.state.modal
         });
        }

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

    handleChange(event) {
        this.setState({
            
            [event.target.name]: event.target.value,
        
        })
    }

    // state data is not reacting server

    // handle submit
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
            console.log(data)
        })

        event.preventDefault();
    }
 

  render() {
    return (
      <div>
          <p style={{color: '#FF8921'}} onClick={this.toggle}>need an account? sign up</p>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>shadr code of conduct</ModalHeader>
          <ModalBody>
            shadr has lots of rules they will be here
            <br />
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
            <ModalHeader>Some info from you rq</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                    <Input type="text" name="name" id="name" placeholder="name" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="email" id="email" placeholder="email" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="text" name="screenname" id="screenname" placeholder="screenname" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
                </FormGroup>
                </Form>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={this.handleSubmit}>Submit</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>Nevermind</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleNested}>I agree, continue</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>nevermind, cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
 
export default SignUpModal;