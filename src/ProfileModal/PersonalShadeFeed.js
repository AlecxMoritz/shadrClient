import React from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components'
import UpdateMyShade from './UpdateMyShade'
const Shade = styled.div`
    background-color: #575757
    margin: .5em;
    padding: .5em;
    border-radius: 5%

`;

const ScreenName = styled.h2`
    color: #FF8921
`;


const Logo = styled.img`
  position: relative;

`;

const PersonalShadeFeed = (props) => {
    
        return (
            
            <div id="shade">
            
                    <p></p>
                {
                    props.myshades.map((shade, id) => {
                        return(
                        <Shade key={id}>
                            <ScreenName>{shade.ownerscreenname}</ScreenName>
                            <p>{shade.text}</p>
                            <div>
                                
                                <div className="btn-group">
                                <UpdateMyShade getMyShades={props.getMyShades} id={shade.id} text={shade.text}/>
                                <Button id={shade.id} onClick={props.delete}>delete</Button> 
                                <Logo src={require('../assets/angryBeFunkyEdit.png')} id={shade.id} alt="logo"  height="25px" width="25px"/>
                                <span>{shade.totaldislikes}</span>
                                </div>
                            </div>
                        </Shade> 
                        )
                    })
                }
            </div>
        )
    }

export default PersonalShadeFeed