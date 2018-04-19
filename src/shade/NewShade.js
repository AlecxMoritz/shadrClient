import React from 'react';
import { Button, Form, FormGroup  } from 'reactstrap'
import styled from 'styled-components'

const ShadeBox = styled.div`
    background-color: #575757
    margin: .5em;
    padding: .5;
    border-radius: 2%
`;

const NewShadeText = styled.textarea`
    margin: auto,
    width: 80vw,
    height: 20vw,
`;

const PostButton = styled.button`

`;

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
        })
        {this.props.getShades();}
        event.preventDefault();
        document.forms["newShade"].reset();
        }

   // render
   /////////
   //

   render() {
        return (
            <div>
                <ShadeBox>
            <Form id="newShade" style={{padding: 'auto'}} onSubmit={this.handleSubmit}>
                <FormGroup>
                    
                    <NewShadeText style={{width: '85vw', height: '20vw', marginTop: '.5em', marginLeft: '1em', }} type="text" name="text" id="text" maxLength="120" placeholder="feelin' shady?" onChange={this.handleChange} ></NewShadeText>
                </FormGroup>
                <Button style={{backgroundColor: '#FF8921', margin: 'auto', position: 'relative', bottom: '.5em', left: '18em'}}>post</Button>
            </Form>
            </ShadeBox>
        </div>
        )
    }
}
export default NewShade

