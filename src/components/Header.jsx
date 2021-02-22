import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Nav = styled.nav`
    background: white;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;
    border-bottom: 2px #000 solid;
`

const Logo = styled.span`
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    padding: .2rem 2rem;
    background: #071013;
`

const Link = styled.a`
    font-weight: ${props => props.active ? '700' : '400'};
    font-size: 1rem;
    padding: 20px 15px;
    color: ${props => props.active ? 'white' : '#333'};
    background: ${props => props.active ? 'black' : 'transparent'};
    margin-right: .2rem;
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
                <Link href='google.com' active={true}>todo</Link>
                <Link href='google.com'>projects</Link>
                <Link href='google.com'>goals</Link>
                <Link href='google.com'>calendar</Link>
                <Link href='google.com'>lists</Link>
                <Link href='google.com'>screen Time</Link>
                <Link onClick={() => { props.setShowWallpaper(true) }}>wallpaper</Link>
                <Link href='https://guyckr4srmz.typeform.com/to/vnZYklfj' rel='nofollow' target='_blank' >feedback</Link>
            </LinkContainer>
        </Nav>
    )
}

export default TodoItem;