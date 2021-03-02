import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import styled from 'styled-components'
import Wallpaper from './components/Wallpaper';
import TodoPage from './components/Pages/TodoPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import CalendarPage from './components/Pages/CalendarPage';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

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

  @media only screen and (max-width: 600px) {
    display: none;
  }

`


const App = () => {

  const [showWallpaper, setShowWallpaper] = useState(false);

  return (
    <Router>
      <Header setShowWallpaper={setShowWallpaper}></Header>

      <Route exact path="/" component={TodoPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/calendar" component={CalendarPage} />

      <Footer >
        <div style={{ paddingBottom: '4px' }}>"Try not to become a man of success, but rather try to become a man of value."</div>
        <div><small>A. Einstein</small></div>
      </Footer>
      <Wallpaper show={showWallpaper} setShowWallpaper={setShowWallpaper} />

    </Router>
  )
}

export default App;