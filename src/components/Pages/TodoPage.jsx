import React, { useState, useEffect } from 'react';
import TodoContainer from '../Todo/TodoContainer'
import HabitContainer from '../Habits/HabitContainer'
import styled from 'styled-components'
import Checkbox from '../UI/Checkbox';
import { useHistory } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';


const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`

const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`

const TodoPage = () => {

    const history = useHistory();

    const handleKey = (key, e) => {
        if (key === 'right') history.push('/projects')
        else if (key === 'left') history.push('/calendar')
    }

    return (
        <Section>
            <div style={{ borderRight: '2px solid #DDD', paddingRight: '20px', width: '20%' }}>
                <H1>Todo</H1>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Checkbox label='Important' important={true} color='#ff0054' />
                    <br />
                    <h3>Project</h3>
                    <Checkbox label='Personal' color='#51bbfe' />
                    <Checkbox label='Escuela' color='#41E2BA' />
                    <Checkbox label='HyperK' color='#ffd400' />
                    <Checkbox label='Side projects' color='#5A716A' />
                    <br />
                </div>
            </div>

            <TodoContainer />
            <HabitContainer />

            <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
        </Section>
    )
}

export default TodoPage;