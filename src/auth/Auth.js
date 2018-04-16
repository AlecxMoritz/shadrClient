import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styled from 'styled-components';


const AuthDiv = styled.div`
    background-color: #575757
    height: 50vw;
    width: 70vw;
    margin: auto;
    padding: auto;
    text-align: center;
`

const Auth = (props) => {
    // constructor(props) {
    //     super(props)
    // }
     
        return(
           <AuthDiv>
               <SignIn setToken={props.setToken}/>

               
               <SignUp setToken={props.setToken}/>
            </AuthDiv>
            // need a modal up there 
        )
    
}

export default Auth;