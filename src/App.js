import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import styled from 'styled-components'
import Wallpaper from './components/Wallpaper';
import TodoPage from './components/Pages/TodoPage';
import ProjectsPage from './components/Pages/ProjectsPage';
import CalendarPage from './components/Pages/CalendarPage';

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
  padding: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
`

const MobileAlert = styled.footer`
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`


const App = () => {

  const [showWallpaper, setShowWallpaper] = useState(false);
  const [quote, setQuote] = useState({ quote: '', author: '' })

  useEffect(() => {
    fetch('http://localhost:8000/quotes', {
      method: 'GET'
    }).then(res => res.json()).then((res) => {
      //TODO: Only do this once a day, use a cookie for it
      setQuote(res)
      console.log(res)
    }).catch((err) => { console.log(err) })
  }, [])

  return (
    <Router>
      <Header setShowWallpaper={setShowWallpaper}></Header>

      <Route exact path="/" component={TodoPage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/calendar" component={CalendarPage} />

      <Footer >
        <div style={{ paddingBottom: '4px', textAlign: 'center' }}>"{quote.quote}"</div>
        <div><small>{quote.author}</small></div>
      </Footer>
      <Wallpaper show={showWallpaper} setShowWallpaper={setShowWallpaper} />

      <MobileAlert>
        <h1>nwtn</h1>
        mobile coming soon
      </MobileAlert>

    </Router>
  )
}

export default App;