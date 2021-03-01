import React, { useState } from 'react';
import styled from 'styled-components'
import moment from 'moment'


const Input = styled.input`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #DDD;
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
            <Input value={moment(props.value).format("yyyy-MM-DD")} name={props.name} onChange={props.onChange} type='date'>

            </Input>
        </>

    )
}

export default Select;