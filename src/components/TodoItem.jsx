import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

const Item = styled.div`
    background: white;
    box-shadow: 1px 1px 7px 1px #DDD;
    padding: 1rem;
    color: #333;
    cursor: pointer;
    margin-bottom: .7rem;
    display: flex;
`

const Checkbox = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 2px;
    border: #333 solid 2px;
    margin-right: 1rem;
    background: ${props => props.checked ? '#333' : 'inherit'}
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

    useEffect(() => {
        if (props.done) setCompleted(true);
    }, [])

    return (
        <Item>
            <Checkbox checked={completed} onClick={() => { setCompleted(!completed) }}></Checkbox>
            <Title underline={props.important}>{props.title}</Title>
            <CategoryMarker color={props.color}></CategoryMarker>
        </Item >
    )
}

export default TodoItem;