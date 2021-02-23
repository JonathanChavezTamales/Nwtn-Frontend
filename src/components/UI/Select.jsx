import React, { useState } from 'react';
import styled, { css } from 'styled-components'


const Selector = styled.select`
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid black;
    padding: .3rem 1rem;

    &:focus{
        outline-width: 0;
        border-bottom: 2px dashed black;
    }
`

const Select = (props) => {
    return (
        <Selector>
            <option value="" selected>No category</option>
            <option value="escuela">Escuela</option>
            <option value="hyperk">HyperK</option>
        </Selector>
    )
}

export default Select;