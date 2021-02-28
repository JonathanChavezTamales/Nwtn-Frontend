import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.button`
    border-radius: 3px;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    ${props => props.big ? 'padding: 1rem 2rem;' : 'padding: .2rem 1rem;'}
    outline:none;
    cursor: pointer;
    margin: .2rem;
    color:white;
    background-color: ${props => props.color || 'transparent'};

    ${props => props.alternate ? `background: transparent; color: #333; border: solid 2px ${props.color}` : ''}
`

const Button = (props) => {
    return (
        <Container onClick={props.onClick} color={props.color} alternate={props.alternate} big={props.big}>
            {props.children}
        </Container>
    )
}

export default Button;