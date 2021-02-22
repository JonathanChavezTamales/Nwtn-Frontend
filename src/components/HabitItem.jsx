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
    border: black solid 2px;
    margin-right: 1rem;
    border-radius: 100%;
    background: ${props => props.checked ? 'black' : 'inherit'}
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