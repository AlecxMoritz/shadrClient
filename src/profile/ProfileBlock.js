import React from 'react';

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
            <div>
                <h1>{this.state.screenname}</h1>
                <p>{this.state.userrank}</p>
                <span>{this.state.dislikesgiven}</span>
            </div>
        )
    }
}