import React, { useState } from 'react';
import styled, { css } from 'styled-components'


const Input = styled.input`
font-size: ${props => props.big ? '2rem' : '1rem'};
font-weight: ${props => props.big ? '600' : '400'};
border: 3px solid black;
padding: 1rem;
width: 95%;
margin-bottom: 1rem;

&:focus{
    outline-width: 0;
    border: 3px dashed black;
}
`

export default Input;