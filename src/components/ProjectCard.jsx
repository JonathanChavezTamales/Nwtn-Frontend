import React, { useState } from 'react';
import styled from 'styled-components'

const Project = styled.div`
    width: 30rem;
    height: 16rem;
    padding-left: 1rem;
    margin-right: 2rem;
    margin-bottom: 3rem;
    background: ${props => props.color || 'gray'};
    box-shadow: 1px 1px 2.5rem 1px #DDD;
    box-sizing: border-box;
    cursor: pointer;
`

const Title = styled.div`
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: 2rem;
`

const PersonImage = styled.img`
    border-radius: 100%;
    width: 3rem;
    height: 3rem;
    margin-right: -1rem;
`

const ProjectCard = (props) => {

    return (
        <Project color={props.color}>
            <div style={{
                background: 'white', height: '100%', padding: '1rem', WebkitBoxSizing: 'border-box', display
                    : 'flex', flexDirection: 'column'
            }}>
                <Title>{props.title || 'Project'}</Title>
                <div>Weekly progress: <b>{props.progress || 0}%</b></div>
                <div style={{ paddingTop: '2rem', flexGrow: '1', alignItems: 'center' }}>
                    <PersonImage src='https://images.generated.photos/zBkGrPELSg6luo3pC9bN9Tse7n_vbNJyrOIAldLzCOk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4MTAyMDcuanBn.jpg'></PersonImage>
                    <PersonImage src='https://images.generated.photos/A3ixL3VOg2DdQyhhNdY7x1_NcA2zj1fhYi_IBEQ2anM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NTAyODkuanBn.jpg'></PersonImage>
                </div>
            </div>
        </Project>
    )
}

export default ProjectCard;