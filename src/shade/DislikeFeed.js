import React from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components'
import Dislike from './Dislike'
import RemoveDislike from './RemoveDislike'

const Shade = styled.div`
    background-color: #575757
    margin: auto;
    margin-top: .5em;
    padding: .5em;
    border-radius: 3%
    width: 17em;
`;

const ScreenName = styled.h2`
    color: #FF8921
`;



const Dislikes = styled.div`
    position: relative;
    float: right;
    bottom: 1.5em;
    display: inline-block;
`;

const DislikeFeed = (props) => {
        return (
            <div id="shade">
                {
                    props.shades.map((shade, id) => {
                        return(
                        <Shade key={id}>
                            <ScreenName>{shade.ownerscreenname}</ScreenName>
                            <p>{shade.text}</p>
                            <Dislikes>
                                <span style={{display: "inline-block", position: 'relative', right: "1em"}}>{shade.totaldislikes}</span>

                                <RemoveDislike getMyDislikes={props.getMyDislikes}shadeid={shade.id}/>
                                 
                                
                            </Dislikes>
                        </Shade> 
                        )
                    })
                }
            </div>
        )
    }

export default DislikeFeed