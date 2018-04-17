import React from 'react';
import { Button } from 'reactstrap';
import UpdateShade from './UpdateShade';


const ShadeFeed = (props) => {

    
    // need a get as a component will mount to get all shades

    
        return (
            <div id="shade">
                {
                    props.shades.map((shade, id) => {
                        return(
                        <div key={id}>
                            <h2>{shade.ownerscreenname}</h2>
                            <p>{shade.text}</p>
                            <span>{shade.totaldislikes}</span>
                            <div>
                                <Button id={shade.id}>dislike</Button>
                                <UpdateShade />
                                <Button id={shade.id} onClick={props.delete}>delete</Button> 
              
                            </div>
                        </div> // need a ternary to dispay bottom buttons if it is a shade the user owns 
                        // onclick event to open an update modal
                        // pass props of update to modal
                        )
                    })
                }
            </div>
        )
    }

export default ShadeFeed