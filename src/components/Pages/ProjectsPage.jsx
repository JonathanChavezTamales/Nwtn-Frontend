import React from 'react';
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'

const Section = styled.section`
  padding: 1rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  margin-left: 5rem;
  margin-top: 2rem;
`

const ProjectsPage = () => {
  return (
    <Section>
      <H1>Projects</H1>
      <section style={{ paddingLeft: '5rem', display: 'flex', flexWrap: 'wrap' }}>
        <ProjectCard title='Personal' color='#51bbfe'></ProjectCard>
        <ProjectCard title='Side projects' color='#5A716A'></ProjectCard>
        <ProjectCard title='Escuela' color='#41E2BA'></ProjectCard>
        <ProjectCard title='Hyper-K' color='#ffd400'></ProjectCard>
        <div style={{ display: 'flex', cursor: 'pointer', justifyContent: 'center', alignItems: 'center', border: '3px #ccc dashed', width: '30rem', height: '16rem' }}>
          <h3 style={{ color: '#ccc' }}>Add a project</h3>
        </div>
      </section>
    </Section>
  )
}

export default ProjectsPage;