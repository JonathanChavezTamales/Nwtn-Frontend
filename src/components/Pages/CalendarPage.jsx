import React from 'react';
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const Section = styled.section`
  padding: 1rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`

const H1 = styled.h1`
font-size: 2rem;
margin-bottom: .5rem;
margin-left: 3rem;
margin-top: .5rem; 
`

const CalendarPage = () => {

  const history = useHistory();

  const handleKey = (key, e) => {
    if (key === 'left') history.push('/projects')
    else if (key === 'right') history.push('/')
  }

  return (
    <Section>
      <H1>Calendar</H1>
      <article style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <iframe title='cal' style={{ width: '70%', height: '60vh', border: 'none' }}
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FMexico_City&amp;src=am9uYXRoYW5jaGF0YWJAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=MnJjMjMzYzBpODFjdm5hNXM0MXR2anEzcjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YjRrN3A2aW50bXAyaG9jdWtzYzVwaGlnMnJhY2hqbHBAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4ubWV4aWNhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%23795548&amp;color=%233F51B5&amp;color=%23D81B60&amp;color=%230B8043&amp;mode=WEEK&amp;showCalendars=0&amp;showPrint=0" />
      </article>
      <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
    </Section >
  )
}

export default CalendarPage;