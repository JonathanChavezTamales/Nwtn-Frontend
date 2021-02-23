import React, { useState } from 'react';
import styled, { css } from 'styled-components'


const Selector = styled.select`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #DDD;
    padding: .3rem 1rem;

    &:focus{
        outline-width: 0;
        border-bottom: 2px dashed black;
    }
`

const Select = (props) => {
    return (
        <Selector value={props.value} name={props.name} onChange={props.onChange}>
            <option value={undefined} selected>Uncategorized</option>
            <option value="escuela">Escuela</option>
            <option value="hyperk">HyperK</option>
        </Selector>
    )
}

export default Select;