import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom';

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

const LinkElement = styled(Link)`
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
                <LinkElement to='/' active={true}>todo</LinkElement>
                <LinkElement to='/projects'>projects</LinkElement>
                <LinkElement to='/goals'>goals</LinkElement>
                <LinkElement to='/calendar'>calendar</LinkElement>
                <LinkElement to='/lists'>lists</LinkElement>
                <LinkElement to='/screentime'>screen Time</LinkElement>
                <LinkElement onClick={() => { props.setShowWallpaper(true) }}>wallpaper</LinkElement>
                <LinkElement to='https://guyckr4srmz.typeform.com/to/vnZYklfj' rel='nofollow' target='_blank' >feedback</LinkElement>
            </LinkContainer>
        </Nav>
    )
}

export default TodoItem;