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
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </section>
    </Section>
  )
}

export default ProjectsPage;