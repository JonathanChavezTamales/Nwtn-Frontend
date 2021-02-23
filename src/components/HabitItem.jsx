import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { faAppleAlt, faBookOpen, faBrain, faDumbbell, faSpa } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = styled.div`
    background: ${props => props.done ? '#a4e096' : 'white'};
    box-shadow: 1px 1px 7px 1px #DDD;
    padding: 1rem;
    height: 10rem;
    width: 10rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    color: background: ${props => props.done ? 'white' : '#333'};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    box-sizing: border-box;
`


const Title = styled.div`
    text-align: center;
    color: wh9
`

const HabitItem = (props) => {

    const pickIcon = () => {
        switch (props.icon) {
            case 'mindfulness': return faSpa;
            case 'exercise': return faDumbbell;
            case 'food': return faAppleAlt;
            case 'study': return faBookOpen;
            case 'brain': return faBrain;
            default: return faSpa;
        }
    }

    const [completed, setCompleted] = useState(false);

    return (
        <Item done={completed} onClick={() => { setCompleted(!completed) }}>
            <FontAwesomeIcon icon={pickIcon()} size='2x' style={{ color: completed ? 'white' : '#333', marginBottom: '3rem' }} />
            <Title style={{ color: completed ? 'white' : '#333' }}>{props.title}</Title>
        </Item>
    )
}

export default HabitItem;