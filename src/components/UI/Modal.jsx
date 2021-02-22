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
    backdrop-filter: blur(6px);
`

const Window = styled.div`
    border: 3px solid black;
    width: 60%;
    display: inherit;
    position: fixed;
    border-radius: 1rem;
    top: 10%;
    left: 15%;
    background: white;
    z-index: 10;
    padding: 3rem;
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
        <Container show={props.show} onClick={closeModal}>
            <Window>
                {props.children}
            </Window>
        </Container>
    )
}

export default Modal;