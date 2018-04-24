import React from 'react';
import styled from 'styled-components'

const Logo = styled.img`
    display: inline-block;
    position: relative;
    bottom: 1.5em;
    
`;


export default class Dislike extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
        this.onClick = this.onClick.bind(this)
        this.handleDislike = this.handleDislike.bind(this);
    }

    onClick() {
        console.log(this.props, localStorage.getItem('screenname'))
    }

    handleDislike() {
        
        fetch('http://localhost:8000/dislike/new', {
            method: 'POST',
            body: JSON.stringify({ dislike: this.props }),
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            })
        })
        .then((res) => res.json())
        .then((dislikeInfo) => {
           
        })
    }

    render() {
        return (
            <div>
                
                <Logo src={require('../assets/angryBeFunkyEdit.png')} onClick={this.handleDislike} alt="logo"  height="25px" width="25px"  />
            </div>
        )
    }
}