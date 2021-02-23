import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: .2rem 1rem;
    cursor: pointer;
    margin: .2rem;
    color:white;
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