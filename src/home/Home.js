import React from 'react';
import { Button } from 'reactstrap';
import ProfileBlock from '../profile/ProfileBlock'
import NewShade from '../shade/NewShade';

const Home = (props) => {
    return (
        <div>

            <div>
                <Button color="primary">code of conduct</Button>
                <Button color="primary">profile</Button>
                <Button color="primary" onClick={props.clickLogout}>sign out</Button>
            </div>
            <ProfileBlock />
            <NewShade />
            <div>recent shades feed</div>

        </div>
    )
}

export default Home