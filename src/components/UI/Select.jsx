import React, { useState } from 'react';
import styled from 'styled-components'


const Selector = styled.select`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #DDD;
    padding: .3rem 1rem;

    &:focus{
        outline-width: 0;
        border-bottom: 2px solid black;
    }
`

const Select = (props) => {
    return (
        <Selector defaultValue={undefined} value={props.value} name={props.name} onChange={props.onChange}>
            {props.placeholder && <option value={undefined}>{props.placeholder || 'Select'}</option>}
            {props.options && props.options.map((option) => <option value={option} key={option}>{option}</option>)}
        </Selector>
    )
}

export default Select;