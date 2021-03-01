import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    background: url("https://source.unsplash.com/random/1600x900");
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
        <Container show={props.show} onClick={() => { props.setShowWallpaper(false) }}>        </Container>
    )
}

export default Wallpaper;