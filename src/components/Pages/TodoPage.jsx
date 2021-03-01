import React, { useState, useEffect } from 'react';
import TodoContainer from '../TodoContainer'
import HabitContainer from '../HabitContainer'
import styled from 'styled-components'
import Checkbox from '../UI/Checkbox';

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
                    <h3>Options</h3>
                    <Checkbox label='Show task details' />
                </div>
            </div>

            <TodoContainer />
            <HabitContainer />
        </Section>
    )
}

export default TodoPage;