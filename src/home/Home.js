import React from 'react';
import { Button } from 'reactstrap';
import ProfileBlock from '../profile/ProfileBlock'
import NewShade from '../shade/NewShade';
import ShadeFeed from '../shade/ShadeFeed';

import CodeOfConductModal from '../MainButtons/CodeOfConductModal';
import styled from 'styled-components'

import ProfileButton from '../MainButtons/ProfileButton';
import ProfileModal from '../MainButtons/ProfileModal';

const MainButtons = styled.div`
    position: relative,
    display: inline-block
`;

const ButtonWrapper = styled.div`
    display: block,
    position: relative,
    left: 3em
    margin-bottom: 2em

`;


class Home extends React.Component  {
    constructor(props){
        super(props)
        this.state = {
            shades: [],
            myshades: [],


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
            return this.setState({ shades: shades })
        })
    }

    // get all shades for a user
 

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
            <ButtonWrapper className="buttonWrapper" style={{position: 'relative'}}>
            <center>
            <MainButtons className="btn-group" roll="group">
                <CodeOfConductModal style={{display: 'inline-block'}} />
                <ProfileModal style={{display: 'inline-block'}} getShades={this.getShades} myshades={this.state.myshades} delete={this.deleteShade}/>
                <Button style={{backgroundColor: '#FF8921', display: 'inline-block'}} onClick={this.props.clickLogout}>sign out</Button>
            </MainButtons>
            </center>
            </ButtonWrapper>

            <div>
               
                <ProfileBlock shades={this.state.shades}/>
                <NewShade getShades={this.getShades}screenname={this.props.screenname}/>
                <ShadeFeed getShades={this.getShades} delete={this.deleteShade} shades={this.state.shades}/>
                
            </div>
        </div>
    )}
}
export default Home