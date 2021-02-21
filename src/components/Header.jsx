import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Nav = styled.nav`
    background: white;
    padding: 1.5rem;
    display: block;
    margin-bottom: .5rem;
    border-bottom: 3px #000 solid;
`

const Logo = styled.span`
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    padding: .2rem 2rem;
    background: #071013;
`

const Link = styled.a`
    font-weight: ${props => props.active ? '600' : '400'};
    font-size: 1rem;
    padding: 3px;
    color: #333;
    margin-right: 2rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: white;
        background: black;
    }
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const TodoItem = (props) => {

    return (
        <Nav>
            <Logo>nwtn.app</Logo>
            <LinkContainer>
                <Link href='google.com' active={true}>Today</Link>
                <Link href='google.com'>Goals</Link>
                <Link href='google.com'>Colabs</Link>
                <Link href='google.com'>Calendar</Link>
                <Link href='google.com'>Links</Link>
                <Link href='google.com'>Screen Time</Link>
                <Link href='google.com'>Notebooks</Link>
                <Link onClick={() => { props.setShowWallpaper(true) }}>Wallpaper</Link>
                <Link href='google.com'>Send feedback</Link>
            </LinkContainer>
        </Nav>
    )
}

export default TodoItem;