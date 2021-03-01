import React, { useState } from 'react';
import styled from 'styled-components'

const Label = styled.label`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    border-left: solid ${props => props.color ? props.color : 'none'} 10px;
    padding-left: 1rem;
`

const Box = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1.5rem;
`

const Checkbox = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', marginBottom: '1rem' }}>
            <Label color={props.color} name={props.label} htmlFor={props.label}>{props.label}</Label>
            <Box type='checkbox' name={props.label}></Box>
        </div>

    )
}

export default Checkbox;