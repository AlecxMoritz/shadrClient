import React from 'react';

export default class RemoveDislike extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("Dislike id: " + this.props.shadeid)

        fetch(`http://localhost:8000/dislike/delete/${this.props.shadeid}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }) 
        }).then((res) => {
            console.log(res)
            this.props.getMyDislikes();
        })
    }

    render() {
        return (
            <img src={require('../assets/cancel.jpg')} alt="cancel" height="25px" width="25px" onClick={this.handleClick}/>
        )
    }
}