import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    display: ${props => props.show ? 'inherit' : 'none'};
    backdrop-filter: brightness(10%);
`

const Window = styled.div`
    border: 10px solid black;
    width: 60%;
    display: inherit;
    position: fixed;
    top: 10%;
    left: 15%;
    background: white;
    z-index: 10;
    padding: 3rem;
`

const Modal = (props) => {

    return (
        <Container show={props.show} onClick={() => { props.setModalOpen(true) }}>
            <Window>
                {props.children}
            </Window>
        </Container>
    )
}

export default Modal;