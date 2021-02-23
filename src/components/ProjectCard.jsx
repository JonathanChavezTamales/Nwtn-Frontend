import React, { useState } from 'react';
import styled, { css } from 'styled-components'

const Project = styled.div`
    width: 30rem;
    height: 18rem;
    padding-left: .5rem;
    margin-right: 2rem;
    margin-bottom: 3rem;
    background: #ff0054;
    box-shadow: 1px 1px 2.5rem 1px #DDD;
`

const Title = styled.div`
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 2rem;
`

const ProjectCard = (props) => {

    return (
        <Project>
            <div style={{ background: 'white', height: '100%', padding: '1rem', WebkitBoxSizing: 'border-box' }}>
                <Title>Side projects</Title>
                Weekly progress: <b>20%</b>
            </div>
        </Project>
    )
}

export default ProjectCard;