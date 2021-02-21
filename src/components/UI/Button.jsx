import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    width: 4rem;
    cursor: pointer;
    height: 2rem;
    margin: .2rem;
    background-color: ${props => props.color || 'transparent'};
`

const Button = (props) => {
    return (
        <Container onClick={props.onClick} color={props.color}>
            {props.text}
        </Container>
    )
}

export default Button;