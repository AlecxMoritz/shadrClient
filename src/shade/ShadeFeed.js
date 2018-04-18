import React from 'react';
import { Button } from 'reactstrap';
import UpdateShade from './UpdateShade';
import styled from 'styled-components'

const Shade = styled.div`
    background-color: #575757
    margin: .5em;
    padding: .5em;

`;

const ScreenName = styled.h2`
    color: #FF8921
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
                            <span>{shade.totaldislikes}</span>
                            <div>
                                <Button id={shade.id}>dislike</Button>
                                <UpdateShade getShades={props.getShades}id={shade.id} text={shade.text}/>
                                <Button id={shade.id} onClick={props.delete}>delete</Button> 
              
                            </div>
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