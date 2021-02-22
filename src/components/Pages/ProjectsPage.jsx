import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
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
        </Section>
    )
}

export default ProjectsPage;