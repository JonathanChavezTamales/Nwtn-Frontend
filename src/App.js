import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import HabitContainer from './components/HabitContainer'
import styled, { css } from 'styled-components'
import Checkbox from './components/UI/Checkbox';
import Wallpaper from './components/Wallpaper';

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: black;
  color: white;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
`
const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`

const App = () => {

  const [showWallpaper, setShowWallpaper] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') prompt('')
    })
  })

  return (
    <div>
      <Header setShowWallpaper={setShowWallpaper}></Header>

      <Section>
        <div style={{ borderRight: '2px solid black', paddingRight: '20px', width: '20%' }}>
          <H1>Todo</H1>
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <Checkbox label='Important' important={true} color='#ff0054' />
            <Checkbox label='Trabajo' color='#51bbfe' />
            <Checkbox label='Tec' color='#41E2BA' />
            <Checkbox label='HyperK' color='#ffd400' />
            <Checkbox label='Side projects' color='#D4C1EC' />
          </div>
        </div>

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