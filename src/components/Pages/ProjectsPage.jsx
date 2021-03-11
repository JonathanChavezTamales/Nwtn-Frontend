import React from 'react';
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
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

const ProjectsPage = () => {

  const history = useHistory();

  const handleKey = (key, e) => {
    if (key === 'right') history.push('/calendar')
    else if (key === 'left') history.push('/')
  }

  return (
    <Section>
      <H1>Projects</H1>
      <section style={{ margin: '3rem 15% 0 15%', display: 'flex', flexWrap: 'wrap', minWidth: '80%' }}>
        <ProjectCard title='Personal' color='#51bbfe'></ProjectCard>
        <ProjectCard title='Side projects' color='#5A716A'></ProjectCard>
        <ProjectCard title='Escuela' color='#41E2BA'></ProjectCard>
        <ProjectCard title='Hyper-K' color='#ffd400'></ProjectCard>
        <div style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center', alignItems: 'center', border: '3px #ccc dashed', height: '12rem', width: '22%', minWidth: '16rem' }}>
          <h3 style={{ color: '#ccc' }}>Add a project</h3>
        </div>
      </section>
      <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
    </Section>
  )
}

export default ProjectsPage;