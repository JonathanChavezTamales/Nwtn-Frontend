import React, { useState } from 'react';
import styled from 'styled-components'


const Container = styled.div`
    background: white;
    box-shadow: 1px 1px 15px rgba(9,9,9,0.1);
    padding: 2rem 1rem;
    position: absolute;
    top: -3px;
    right: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
`

const Select = (props) => {
    return (
        <Container width={props.width || '10rem'}>
            {props.children}
        </Container>
    )
}

export default Select;