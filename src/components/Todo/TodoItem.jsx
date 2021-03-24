import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import EditTodo from './EditTodo'
import moment from 'moment'
import Checkbox from '../UI/Checkbox'

const Item = styled.div`
    box-shadow: 1px 1px 15px 1px #eee;
    padding: .6rem;
    color: ${props => props.checked ? 'white' : '#333'};
    cursor: pointer;
    margin-bottom: .5rem;
    display: flex;
    align-items:center;
    position: relative;
    background: ${props => props.checked ? '#a4e096' : 'white'}
`

const Title = styled.div`
    align-self: center;
    font-weight: 400;
`

const ImportantMarker = styled.div`
    width: 9px;
    border-radius: 100%;
    height: 9px;
    background: #ff0054;
    justify-self: flex-end;
`

const Reminder = styled.span`
    background: #f37068;
    font-weight: 700;
    font-size: .7rem;
    color: white;
    border-radius: 4px;
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding: 3px 10px;
`

const TodoItem = (props) => {

    const [completed, setCompleted] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const categoryToColor = (category) => {
        switch (category) {
            case 'Personal': return '#51bbfe';
            case 'HyperK': return '#ffd400';
            case 'Escuela': return '#41E2BA';
            case 'Side Projects': return '#5A716A';
            default: return 'transparent';
        }
    }

    useEffect(() => {
        if (props.done) setCompleted(true);
    }, [])

    const handleClick = (e) => {
        if (e.target.id === 'item') {
            setModalOpen(true)
        }
    }

    const handleCheck = () => {

        // this completed is before click on checkbox
        const payload = completed ? null : moment().utc().endOf('day')

        fetch(`http://localhost:8000/tasks/${props._id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed: payload })
        }).then((res) => {
            setCompleted(!completed);
        }).catch((err) => { console.log(err) })
    }

    return (
        <>
            <Item id='item' checked={completed} onClick={handleClick}>
                <Checkbox checked={completed} onClick={handleCheck} marker={categoryToColor(props.category)}></Checkbox>
                <Title id='item'>{props.title}</Title>
                <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
                    {props.reminder && !completed && <Reminder>{props.reminder}</Reminder>}
                    {props.important && !completed && <ImportantMarker />}
                </div>

            </Item >
            {modalOpen && <EditTodo open={modalOpen} _id={props._id} setModalOpen={setModalOpen}></EditTodo>
            }
        </>
    )
}

export default TodoItem;