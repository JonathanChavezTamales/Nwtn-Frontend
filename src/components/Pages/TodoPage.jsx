import React, { useState, useEffect, useContext } from 'react';
import TodoContainer from '../Todo/TodoContainer'
import HabitContainer from '../Habits/HabitContainer'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import {TodoContext} from '../../context/TodoContext'

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

const TodoPage = () => {

    const history = useHistory();

    const {tasks, setTasks} = useContext(TodoContext);
    
    const [filters, setFilters] = useState({});

    const retrieveTasks = () => {
        fetch('http://localhost:8000/tasks', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setTasks({
                    today: data.today,
                    thisweek: data.thisweek,
                    someday: data.someday
                });
                console.log(data)
            });
    }

    const handleKey = (key, e) => {
        if (key === 'right') history.push('/projects')
        else if (key === 'left') history.push('/calendar')
    }

    useEffect(() => {
        retrieveTasks();
    }, [])

    return (
        <Section>

            <H1>Todo</H1>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <TodoContainer tasks={tasks} retrieveTasks={retrieveTasks} />
                <HabitContainer />
            </div>


            <KeyboardEventHandler handleKeys={['left', 'right']} onKeyEvent={handleKey} />
        </Section>
    )
}

export default TodoPage;