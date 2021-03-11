import React, { useState } from 'react';
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom';

const Nav = styled.nav`
    background: white;
    padding: .6rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;
    box-shadow: 1px 0px 15px 1px #eaeaea;
`

const Logo = styled.span`
    font-weight: 600;
    font-size: 1.5rem;
    color: white;
    padding: .2rem 2rem;
    background: #071013;
`

// This is because styles are shared by navlink and a
const linkStyles = `
font-weight: 400;
font-size: 1rem;
padding: .6rem .9rem;
color: #333;
background: transparent;
margin-right: .2rem;
text-decoration: none;
cursor: pointer;
font-weight: 400;


&:hover {
    color: white;
    background: black;
}
`

const LinkElement = styled(NavLink)`
    ${linkStyles}
`

const A = styled.a`
    ${linkStyles}
    color: #777;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const activeLinkStyle = {
    color: 'white',
    background: 'black',
    boxSizing: 'border-box'
}

const TodoItem = (props) => {

    return (
        <Nav>
            <Logo><Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>nwtn.app</Link></Logo>
            <LinkContainer>
                <LinkElement to='/' exact activeStyle={activeLinkStyle}>todo</LinkElement>
                <LinkElement to='/projects' activeStyle={activeLinkStyle}>projects</LinkElement>
                <LinkElement to='/calendar' activeStyle={activeLinkStyle}>calendar</LinkElement>
                {/* <LinkElement to='/goals'>goals</LinkElement>
                <LinkElement to='/lists'>lists</LinkElement>
                <LinkElement to='/screentime'>screen time</LinkElement> */}
                {/* <LinkElement onClick={() => { props.setShowWallpaper(true) }} to='#'>wallpaper</LinkElement> */}
                <A href='https://guyckr4srmz.typeform.com/to/vnZYklfj' rel='nofollow' target='_blank' >send feedback</A>
            </LinkContainer>
        </Nav>
    )
}

export default TodoItem;