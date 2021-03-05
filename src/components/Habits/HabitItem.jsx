import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { faAppleAlt, faBookOpen, faBrain, faDumbbell, faSpa, faInfo, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditHabit from './EditHabit'

const EditButton = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    background: white;
    border: 2px solid #a4e096;
    border-radius: 100%;
    display: none;

    justify-content: center;
    align-items:center;

    &:hover {
        display: flex;
    }
`

const Item = styled.div`
    background: ${props => props.done ? '#a4e096' : 'white'};
    box-shadow: 1px 1px 7px 1px #DDD;
    padding: 1rem;
    height: 10rem;
    font-weight: 500;
    width: 10rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    color: ${props => props.done ? 'white' : '#333'};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    box-sizing: border-box;
    position: relative;


    &:hover ${EditButton} {
        display: flex;
    }
`


const Title = styled.div`
    text-align: center;
    color: wh9
`



const HabitItem = (props) => {

    const [completed, setCompleted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const pickIcon = () => {
        switch (props.icon) {
            case 'mindfulness': return faSpa;
            case 'exercise': return faDumbbell;
            case 'food': return faAppleAlt;
            case 'study': return faBookOpen;
            case 'brain': return faBrain;
            case 'music': return faMusic;
            default: return faSpa;
        }
    }

    const handleInfoClick = (e) => {
        e.stopPropagation();
        setModalOpen(true)
    }

    useEffect(() => {
        if (props.done) setCompleted(true);
    }, [])

    const handleCheck = (e) => {
        if (e.target.id === 'item') {
            fetch(`http://localhost:8000/habits/${props.id}`, {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ completedToday: !completed })
            }).then((res) => {
                setCompleted(!completed)
            }).catch((err) => { console.log(err) })
        }
    }

    return (
        <Item id='item' done={completed} onClick={handleCheck}>
            <FontAwesomeIcon icon={pickIcon()} size='2x' style={{ color: completed ? 'white' : '#333', marginBottom: '3rem' }} />
            <Title style={{ color: completed ? 'white' : '#333' }}>{props.title}</Title>
            <small style={{
                marginTop: '.4rem'
            }}>{completed ? props.streak + 1 : props.streak}</small>
            <EditButton id='editbutton' onClick={handleInfoClick}>
                < FontAwesomeIcon icon={faInfo} style={{ color: '#aaa' }} />
            </EditButton>
            {
                modalOpen && <EditHabit onClick={() => { console.log('caaca') }} name='editModal' open={modalOpen} setModalOpen={setModalOpen} _id={props.id}></EditHabit>
            }
        </Item >
    )
}

export default HabitItem;