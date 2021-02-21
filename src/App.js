import React, { useState } from 'react';
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import HabitContainer from './components/HabitContainer'
import styled, { css } from 'styled-components'
import Wallpaper from './components/Wallpaper';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: black;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
`
const H1 = styled.h1`
  font-size: 3rem;
  margin-left: 1.5rem;
  margin-bottom: 0rem;
`

const App = () => {

  const [showWallpaper, setShowWallpaper] = useState(false);

  return (
    <div>
      <Header setShowWallpaper={setShowWallpaper}></Header>
      <H1>Today</H1>
      <Section>
        <TodoContainer />
        <HabitContainer />
      </Section>
      <Footer >
        <div style={{ paddingBottom: '4px' }}>"Try not to become a man of success, but rather try to become a man of value."</div>
        <div><small>A. Einstein</small></div>
      </Footer>
      <Wallpaper show={showWallpaper} setShowWallpaper={setShowWallpaper} />
    </div>
  )
}

export default App;