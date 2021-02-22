import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Item = styled.div`
    background: white;
    border: 2px black solid;
    padding: 1rem;
    border-radius: 6px;
    margin-bottom: .5rem;
    display: flex;
`

const Checkbox = styled.span`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 3px;
    border: black solid 2px;
    margin-right: 1rem;
    background: ${props => props.checked ? 'black' : 'inherit'}
`

const Title = styled.div`
    align-self: center;
    font-weight: 600;
    ${props => props.underline ? 'border-bottom: 2px dashed #ff0054;' : ''}
`

const CategoryMarker = styled.span`
    width: .5rem;

    background: ${props => props.color ? props.color : 'transparent'};
    margin-right: .3rem;
    margin-left: auto;
`

const TodoItem = (props) => {

    return (
        <Item>
            <Checkbox checked={props.done}></Checkbox>
            <Title underline={props.important}>{props.title}</Title>
            <CategoryMarker color={props.color}></CategoryMarker>

        </Item >
    )
}

export default TodoItem;