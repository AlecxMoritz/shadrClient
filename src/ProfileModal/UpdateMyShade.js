import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

class UpdateMyShade extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
        text: '',
        shadeid: '',
      };
  
      this.toggle = this.toggle.bind(this);
      this.setShadeToUpdate = this.setShadeToUpdate.bind(this);
      this.clickMe = this.clickMe.bind(this)
      this.clickMeToo = this.clickMeToo.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    clickMe(event) {
        this.setShadeToUpdate()
        this.toggle()
    }

    clickMeToo(event) {
        this.toggle()
        this.handleSubmit(event)
    }

    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
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
          <Button color="danger" onClick={this.clickMe}>edit</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{localStorage.getItem('screenname')}</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                    <Input id="text" type="text" name="text" value={this.state.text} placeholder="edit your shade" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.clickMeToo}>save</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>nevermind</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
  }
  
  export default UpdateMyShade;