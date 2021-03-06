import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import EditTodo from './EditTodo'
import moment from 'moment'

const Item = styled.div`
    box-shadow: 1px 1px 15px 1px #eee;
    padding: 1rem;
    color: ${props => props.checked ? 'white' : '#333'};
    cursor: pointer;
    margin-bottom: .7rem;
    display: flex;
    align-items:center;
    position: relative;
    background: ${props => props.checked ? '#a4e096' : 'white'}
`

const Checkbox = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    border: ${props => props.checked ? '#8fca87' : '#ccc'} solid 2px;
    margin-right: 1rem;
    background: ${props => props.checked ? '#8fca87' : 'inherit'};
    border-left: 4px solid ${props => props.category};
    ${props => props.checked ? 'border-left: #8fca87 solid 2px;' : ''}
    `

const Title = styled.div`
    align-self: center;
    font-weight: 500;
`

const ImportantMarker = styled.div`
    width: .3rem;
    height: 1.7rem;
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
            default: return '#ccc';
        }
    }

    useEffect(() => {
        if (props.done) setCompleted(true);
    }, [])

    const handleClick = (e) => {
        if (e.target.id !== 'checkbox') {
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
                <Checkbox id='checkbox' checked={completed} onClick={handleCheck} category={() => categoryToColor(props.category)}></Checkbox>
                <Title>{props.title}</Title>
                <div style={{ display: 'flex', marginLeft: 'auto' }}>
                    {props.reminder && <Reminder>{props.reminder}</Reminder>}
                    {props.important && <ImportantMarker />}
                </div>

            </Item >
            {modalOpen && <EditTodo open={modalOpen} _id={props._id} setModalOpen={setModalOpen}></EditTodo>
            }
        </>
    )
}

export default TodoItem;