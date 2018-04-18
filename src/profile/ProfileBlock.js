import React from 'react';
import styled from 'styled-components'

// styles

const ProfileSection = styled.div`
    background-color: #575757
    margin: .5em;
    padding: .5em;
`;

const ScreenName = styled.h1`
    color: #FF8921
`;

const UserRank = styled.p`
    font-weight: bold;
`;

export default class ProfileBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenname: '',
            userimg: '',
            dislikesgiven: '',
            userrank: 'shadr'
            
        }
        this.getUserInfo = this.getUserInfo.bind(this)
    }


    // get user info
    getUserInfo() {
        fetch('http://localhost:8000/advuser/me', {
            method: 'GET',
            headers: new Headers({
                'Content-Type' :'application/json',
                'Authorization' : localStorage.getItem('token')
            })
        }).then((res) => res.json())
        .then((user) => {
            console.log(user)
            this.setState({
                screenname: `${user.user.usersymbol}${user.user.screenname}`,
                userimg: user.img,
                dislikesgiven: user.dislikesgiven,
            })
        })
    }


    componentWillMount() {
        this.getUserInfo()
    }


    render() {
        return (
            <ProfileSection>
                <ScreenName>{this.state.screenname}</ScreenName>
                <UserRank>{this.state.userrank}</UserRank>
                <span>{this.state.dislikesgiven}</span>
            </ProfileSection>
        )
    }
}