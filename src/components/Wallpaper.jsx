import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import Clock from './Clock'

const Container = styled.div`
    position: fixed;
    background: url("https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80");
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 11;
    background-size: cover;
    display: ${props => props.show ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    animation: fadeIn ease .5s;

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
        }
`

const Wallpaper = (props) => {
    return (
        <Container show={props.show} onClick={() => { props.setShowWallpaper(false) }}>
            <Clock></Clock>
        </Container>
    )
}

export default Wallpaper;