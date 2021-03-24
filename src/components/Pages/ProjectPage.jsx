import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useHistory, useParams } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Link } from 'react-router-dom';
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MonthlySection from "../Projects/MonthlyProgress"
import WeeklySection from "../Projects/WeeklyProgress"
import BoardSection from "../Projects/Board"


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

const Container = styled.article`
    background: white;
    width: ${props => props.width};
    box-shadow: 1px 1px 1.5rem 1px #eee;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

const NavLink = styled.div`
    font-weight: 600;
    color: ${props => props.activeSection === props.title && props.title ? '#333' : '#ccc'};
    margin-bottom: 1rem;
    cursor: pointer;
`

const ProjectPage = (props) => {

    const history = useHistory();
    let { project } = useParams();

    const [tasks, setTasks] = useState([]);
    const [activeSection, setActiveSection] = useState("Project board");

    const retrieveTasks = () => {
        fetch(`http://localhost:8000/tasks/project/${project}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                console.log(data)
            });
    }

    useEffect(() => {
        retrieveTasks();
    }, [])

    const handleKey = (key, e) => {
        if (key === 'right') history.push('/calendar')
        else if (key === 'left') history.push('/')
    }

    return (
        <Section>
            <H1>
                <span style={{ color: '#999' }}>
                    <Link2 to='/projects'>Projects / </Link2>
                </span>
                {project}
            </H1>
            <div style={{ display: 'flex', justifyContent: 'center', height: '70vh', marginTop: '2rem' }}>
                <section style={{ maxWidth: '1080px', height: '70vh', width: '1080px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <Container width='20%' style={{ paddingTop: '3rem' }}>
                    <NavLink activeSection={activeSection} title="Project board" onClick={() => { setActiveSection("Project board") }}>Project board</NavLink>
                        <NavLink activeSection={activeSection} title="Weekly progress" onClick={() => { setActiveSection("Weekly progress") }}>Weekly progress</NavLink>
                        <NavLink activeSection={activeSection} title="Monthly progress" onClick={() => { setActiveSection("Monthly progress") }}>Monthly progress</NavLink>
                        <NavLink style={{ marginTop: 'auto' }}>Invite link (soon)</NavLink>
                    </Container>

                    <Container width='80%' style={{ paddingLeft: '2rem' }}>
                        {activeSection === "Weekly progress" && <WeeklySection project={project}></WeeklySection>}
                        {activeSection === "Monthly progress" && <MonthlySection project={project}></MonthlySection>}
                        {activeSection === "Project board" && <BoardSection project={project}></BoardSection>}
                    </Container>
                </section>
            </div>
            <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
        </Section>
    )
}

export default ProjectPage;