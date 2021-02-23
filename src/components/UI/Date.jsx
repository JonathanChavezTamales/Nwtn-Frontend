import React, { useState } from 'react';
import styled, { css } from 'styled-components'


const Input = styled.input`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid black;
    padding: .3rem 1rem;
    color: gray;

    &:focus{
        outline-width: 0;
        border-bottom: 2px dashed black;
    }
`

const Select = (props) => {
    return (
        <>
            <label htmlFor="date">Due date:</label>
            <Input type='date'>

            </Input>
        </>

    )
}

export default Select;