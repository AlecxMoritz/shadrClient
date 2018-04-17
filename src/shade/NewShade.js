import React from 'react';
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap'

class NewShade extends React.Component  {
   constructor(props) {
       super(props) 
       this.state = {
        text: '',
        screenname: localStorage.getItem('screenname')
       }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)
   }

   // handle change
   ////////////////

   handleChange(event) {
       this.setState({
           [event.target.name]: event.target.value
        })
        console.log(this.state)
    }


    // handle submit
    ////////////////
    //

    handleSubmit(event) {
        console.log("new shade")
        fetch('http://localhost:8000/shade/new', {
            method: 'POST',
            body: JSON.stringify({ shade: this.state }),
            headers: new Headers({
                'Content-Type' : 'application/json',
                "Authorization" : localStorage.getItem('token')
            })
        })
        .then((res) => res.json())
        .then((shadeData) => {
            console.log(shadeData)
        })
        event.preventDefault();
        document.forms["newShade"].reset();   
              
   }

   // render
   /////////
   //

   render() {
        return (
            <div>
            <Form id="newShade" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <InputGroupAddon addonType="prepend">{this.props.screenname}</InputGroupAddon>
                    <Input type="text" name="text" id="text" placeholder="new shade box" onChange={this.handleChange} />
                </FormGroup>
                <Button>post shade</Button>
            </Form>
            </div>
        )
    }
}
export default NewShade

