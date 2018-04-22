import React from 'react';
import { Button } from 'reactstrap';

import styled from 'styled-components'
import UpdateMyShade from './UpdateMyShade'
import UpdateShadeModal from './UpdateShadeModal'


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

const UserControls = styled.div`
    position: relative;
    float: right;
    bottom: 1.7em;
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
                            <p style={{marginBottom: '1.8em'}}>{shade.text}</p>

                            <div>
                                <UserControls>
                                <div className="btn-group">
                                <span>{shade.totaldislikes}</span>
                                <Logo src={require('../assets/angryBeFunkyEdit.png')} id={shade.id} alt="logo"  height="25px" width="25px"/>


                                <div></div>

                                <UpdateShadeModal getMyShades={props.getMyShades} id={shade.id} text={shade.text}/>
                                
                                

                                <img src={require('../assets/deleteBeFunkyEdit.png')} id={shade.id} onClick={props.delete} alt="delete"  height="25px" width="25px"/>                            

                                
                            

                                </div>
                            </UserControls>
                            </div>
                        </Shade> 
                        )
                    })
                }
            </div>
        )
    }

export default PersonalShadeFeed