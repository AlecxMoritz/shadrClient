import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenname: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle change
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        console.log(this.state)
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken);
            this.props.setScreenname(data.user)
            localStorage.setItem('screenname', data.user.usersymbol + data.user.screenname)
            localStorage.setItem('id', data.user.id);
        })
        .catch(function(err) {
            console.log(err)
        })
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h1><center>sign in</center></h1>
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input type="text" name="screenname" id="screenname" placeholder="screenname" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
                </FormGroup>
                <Button>submit</Button>
            </Form>
        </div>
        )
    }
}

