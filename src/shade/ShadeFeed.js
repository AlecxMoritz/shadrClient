import React from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components'

const Shade = styled.div`
    background-color: #575757
    margin: auto;
    margin-top: .5em;
    padding: .5em;
    border-radius: 3%
    width: 19em;
`;

const ScreenName = styled.h2`
    color: #FF8921
`;

const Logo = styled.img`
  position: relative;

`;

const Dislikes = styled.div`
    position: relative;
    float: right;
    bottom: 1.5em;
`;

const ShadeFeed = (props) => {
        return (
            <div id="shade">
                {
                    props.shades.map((shade, id) => {
                        return(
                        <Shade key={id}>
                            <ScreenName>{shade.ownerscreenname}</ScreenName>
                            <p>{shade.text}</p>
                            <Dislikes>
                                 <Logo src={require('../assets/angryBeFunkyEdit.png')} id={shade.id} alt="logo"  height="25px" width="25px" />
                                 
                                <span>{shade.totaldislikes}</span>
                                {/* <UpdateShade getShades={props.getShades}id={shade.id} text={shade.text}/>
                                <Button id={shade.id} onClick={props.delete}>delete</Button>  */}
                            </Dislikes>
                        </Shade> // need a ternary to dispay bottom buttons if it is a shade the user owns 
                        // onclick event to open an update modal
                        // pass props of update to modal
                        )
                    })
                }
            </div>
        )
    }

export default ShadeFeed