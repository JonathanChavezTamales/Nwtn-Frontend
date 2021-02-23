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
    backdrop-filter: brightness(20%);
`

const Window = styled.div`
    width: 60%;
    height: 100%;
    border-radius: 3px;
    display: inherit;
    position: fixed;
    top: -2%;
    left: 20%;
    background: white;
    z-index: 10;
    padding: 6rem;
    -webkit-box-sizing: border-box;
`

const Modal = (props) => {

    const closeModal = () => {
        props.setModalOpen(false);
        // TODO: Remove event listener after close
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            console.log(e.key)
            if (e.key === 'Escape') {
                closeModal();
            }
        })
    })

    return (
        <Container show={props.show}>
            <Window>
                {props.children}
            </Window>
        </Container>
    )
}

export default Modal;