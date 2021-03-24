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
margin-top: .5rem; 
`

const Container = styled.article`
width: 1080px;
background: white;
box-shadow: 1px 1px 1.5rem 1px #eee;
padding: 1rem;
`

const MePage = () => {

    const history = useHistory();

    const handleKey = (key, e) => {
        if (key === 'left') history.push('/calendar')
        else if (key === 'right') history.push('/')
    }

    return (
        <Section>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>

                <Container>
                    <center><h1 style={{ fontWeight: '300', fontSize: '3rem', margin: '0' }}>Jonathan</h1></center>


                </Container>
            </div>

            <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
        </Section >
    )
}

export default MePage;