import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components'
import KeyboardEventHandler from 'react-keyboard-event-handler';


const Container = styled.div`
    width: 100%;
    cursor: auto;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    display: ${props => props.show ? 'inherit' : 'none'};
    backdrop-filter: brightness(20%);

    animation: fadeIn ease .2s;

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
`

const Window = styled.div`
    width: 100%;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items:center;
    position: fixed;
    top: 10%;
    left: 10%;
    width: 80%;
    color: black;
    background: white;
    z-index: 10;
    padding: 3rem;
    -webkit-box-sizing: border-box;
`

const Modal = (props) => {

    const closeModal = () => {
        props.setModalOpen(false);
    }

    //TODO: Close on esc

    const handleClick = (e) => {
        if (e.target.id === 'container') closeModal();
    }

    return (
        <Container id='container' show={props.show} onClick={handleClick}>
            <KeyboardEventHandler handleKeys={['esc']} isExclusive={true}
                handleFocusableElements={true} onKeyEvent={closeModal}></KeyboardEventHandler>
            <Window id='window'>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '3rem', margin: '0', fontWeight: '300' }}>{props.title}</h1>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '66%', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center' }}>
                    {props.children}
                </div>
            </Window>
        </Container>
    )
}

export default Modal;