import React from 'react';
import FormErrors from './FormErrors'
import { Button } from 'reactstrap'


class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
              email: '',
              password: '',
              name: '',
              screenname: '',
            
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserInput = (e) => { 
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value },
        () => { 
          console.log(this.state)
          this.validateField(name, value) });
    }

    validateField(fieldName, value ) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;

      switch(fieldName) {
          case 'email' :
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
          case 'password':
          passwordValid = value.length >=6;
          fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default: 
        break;
      }
      this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
      }, this.validationForm);
    }

    validationForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid })
    }

    handleSubmit(event) {
      fetch('http://localhost:8000/user/signup', {
        method: 'POST',
        body: JSON.stringify({ user: this.state}),
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

    render () {
      
      return (
        <form className="demoForm" onSubmit={this.handleSubmit}>
          

        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className="form-group" >
            <label htmlFor="name">Full Name</label>
            <input type="text" required className="form-control" name="name"
            placeholder="name"
            
            onChange={this.handleUserInput}  />
          </div>
          <div className="form-group" >
            <label htmlFor="email">Valid Email address</label>
            <input type="email" required className="form-control" name="email"
            placeholder="Email"
            
            onChange={this.handleUserInput}  />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password at least six characters</label>
            <input type="password" className="form-control" name="password"
            placeholder="Password"
            
            onChange={this.handleUserInput}  />
          <div className="form-group" >
            <label htmlFor="screenname">Screenname up to ten characters</label>
            <input type="text" required className="form-control" name="screenname"
            placeholder="screenname" maxLength="10"
            
            onChange={this.handleUserInput}  />
          </div>

          </div>
          <Button style={{backgroundColor: '#FF8921'}} onClick={this.props.closeAll}>nevermind, cancel</Button>
          <Button style={{backgroundColor: '#FF8921'}} type="submit"  disabled={!this.state.formValid}>
             sign me up
          </Button>
        </form>
      )
    }
   }
   export default SignUpForm;