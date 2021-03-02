import React, { useState } from 'react';
import styled from 'styled-components'


const Input = styled.input`
font-size: ${props => props.big ? '2rem' : '1rem'};
font-weight: ${props => props.big ? '600' : '400'};
border: none;
border-bottom: 2px solid #DDD;
padding: 0rem 0rem .5rem 0rem;
width: 95%;
margin-bottom: 3rem;

&:focus{
    outline-width: 0;
    border-bottom: 2px solid black;
}
`

export default Input;