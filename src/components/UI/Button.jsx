import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    width: 1.5rem;
    cursor: pointer;
    height: 1.5rem;
    margin: .2rem;
    background-color: ${props => props.color || 'transparent'};
`

const Button = (props) => {
    return (
        <Container onClick={props.onClick} color={props.color}>
            {props.children}
        </Container>
    )
}

export default Button;