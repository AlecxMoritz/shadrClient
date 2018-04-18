import React from 'react';
import { Button } from 'reactstrap';
import ProfileBlock from '../profile/ProfileBlock'
import NewShade from '../shade/NewShade';
import ShadeFeed from '../shade/ShadeFeed';

class Home extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            shades: [],


        }
        this.getShades = this.getShades.bind(this);
        this.deleteShade = this.deleteShade.bind(this)
    }



    // fetch all shades
    getShades() {
        fetch('http://localhost:8000/shade/all', {
            method: 'GET',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            })
        }).then((res) => res.json())
        .then((shades) => {
            console.log(shades)
            return this.setState({ shades: shades })
        })
    }

    // delete a shade
    deleteShade(event) {
        localStorage.setItem('shadeid', event.target.id)
        fetch(`http://localhost:8000/shade/delete/${localStorage.getItem('shadeid')}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }) 
        }).then((res) => {
            localStorage.removeItem('shadeid')
            this.getShades();
        }
    )
    }


    // update a shade

    

    componentWillMount() {
        this.getShades();
    }

    render() {
    return (
        <div>

            <div>
                <Button color="#FF8921">code of conduct</Button>
                <Button color="#FF8921">profile</Button>
                <Button color="#FF8921" onClick={this.props.clickLogout}>sign out</Button>
            </div>
                <ProfileBlock shades={this.state.shades}/>
                <NewShade getShades={this.getShades}screenname={this.props.screenname}/>
                <ShadeFeed getShades={this.getShades} delete={this.deleteShade} shades={this.state.shades}/>
        </div>
    )}
}
export default Home