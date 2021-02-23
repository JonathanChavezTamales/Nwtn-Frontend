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
        <ProjectCard title='Trabajo' color='#51bbfe'></ProjectCard>
        <ProjectCard title='Side projects' color='#5A716A'></ProjectCard>
        <ProjectCard title='Escuela' color='#41E2BA'></ProjectCard>
        <ProjectCard title='Hyper-K' color='#ffd400'></ProjectCard>
      </section>
    </Section>
  )
}

export default ProjectsPage;