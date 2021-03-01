import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import EditTodo from './EditTodo'

const Item = styled.div`
    box-shadow: 1px 1px 7px 1px #DDD;
    padding: 1rem;
    color: ${props => props.checked ? 'white' : '#333'};
    cursor: pointer;
    margin-bottom: .7rem;
    display: flex;
    background: ${props => props.checked ? '#a4e096' : 'white'}
`

const Checkbox = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    border: ${props => props.checked ? '#fff' : '#ccc'} solid 2px;
    margin-right: 1rem;
    background: ${props => props.checked ? '#97d389' : 'inherit'}
`

const Title = styled.div`
    align-self: center;

    ${props => props.underline ? 'border-bottom: 2px dotted #ff0054;' : ''}
`

const CategoryMarker = styled.span`
    width: .3rem;

    background: ${props => props.color ? props.color : 'transparent'};
    margin-right: .3rem;
    margin-left: auto;
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

    useEffect(() => {
        fetch(`http://localhost:8000/tasks/${props._id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ completed })
        }).then((res) => {
        }).catch((err) => { console.log(err) })
    }, [completed])

    const handleClick = (e) => {
        if (e.target.id !== 'checkbox') {
            setModalOpen(true)
        }
    }

    return (
        <>
            <Item id='item' checked={completed} onClick={handleClick}>
                <Checkbox id='checkbox' checked={completed} onClick={() => { setCompleted(!completed) }}></Checkbox>
                <Title underline={props.important}>{props.title}</Title>
                <CategoryMarker color={() => categoryToColor(props.category)}></CategoryMarker>
            </Item >
            {modalOpen && <EditTodo open={modalOpen} _id={props._id} setModalOpen={setModalOpen}></EditTodo>
            }
        </>
    )
}

export default TodoItem;