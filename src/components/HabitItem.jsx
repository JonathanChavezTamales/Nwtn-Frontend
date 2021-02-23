import React, { useState } from 'react';
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
    border: #333 solid 2px;
    margin-right: 1rem;
    border-radius: 100%;
    background: ${props => props.checked ? '#333' : 'inherit'}
`

const Title = styled.div`
    align-self: center;
`

const HabitItem = (props) => {

    return (
        <Item>
            <Checkbox checked={props.done}></Checkbox>
            <Title>{props.title}</Title>
        </Item>
    )
}

export default HabitItem;