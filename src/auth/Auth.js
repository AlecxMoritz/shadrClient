import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styled from 'styled-components';

import SignUpModal from './SignUpModal'

const AuthDiv = styled.div`
    background-color: #575757
    height: 16em;
    width: 16em;
    margin: auto;
    padding: 1em;
    text-align: center;
    border-radius: 5%
    box-shadow: 13px 18px 3px rgb(30, 30, 30);
    position: relative
    
`

const Auth = (props) => {
    // constructor(props) {
    //     super(props)
    // }
     
        return(
           <AuthDiv>
               <SignIn setToken={props.setToken} setScreenname={props.setScreenname}/>

               
               
               
               <SignUpModal setToken={props.setToken} setScreenname={props.setScreenname}/>
            </AuthDiv>
            // need a modal up there 
        )
    
}

export default Auth;