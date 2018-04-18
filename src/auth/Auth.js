import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styled from 'styled-components';


const AuthDiv = styled.div`
    background-color: #575757
    height: 70vw;
    width: 90vw;
    margin: 1em;
    padding: 1em;
    text-align: center;
`

const Auth = (props) => {
    // constructor(props) {
    //     super(props)
    // }
     
        return(
           <AuthDiv>
               <SignIn setToken={props.setToken} setScreenname={props.setScreenname}/>

               
               <SignUp setToken={props.setToken} setScreenname={props.setScreenname}/>
            </AuthDiv>
            // need a modal up there 
        )
    
}

export default Auth;