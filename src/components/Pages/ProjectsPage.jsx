import React from 'react';
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import { useHistory } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Link } from 'react-router-dom';


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

const Link2 = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

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
        <Link2 to={`/projects/Personal`}>
          <ProjectCard title='Personal' progress={0} color='#51bbfe'></ProjectCard>
        </Link2>
        <Link2 to={`/projects/Side Projects`}>
          <ProjectCard title='Side Projects' progress={.8} color='#5A716A'></ProjectCard>
        </Link2>
        <Link2 to={`/projects/Escuela`}>
          <ProjectCard title='Escuela' progress={.5} color='#41E2BA'></ProjectCard>
        </Link2>

        <Link2 to={`/projects/HyperK`}>
          <ProjectCard title='HyperK' progress={1} color='#ffd400'></ProjectCard>
        </Link2>

        <div style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center', alignItems: 'center', border: '3px #ccc dashed', height: '12rem', width: '20%', minWidth: '18rem' }}>
          <h3 style={{ color: '#ccc' }}>Add a project</h3>
        </div>
      </section>
      <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
    </Section>
  )
}

export default ProjectsPage;