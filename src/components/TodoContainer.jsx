import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import TodoItem from './TodoItem'
import Button from './UI/Button'
import TodoModal from './TodoModal'


const Container = styled.div`
    width: 33%;
    margin-left: 2rem;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`

const H2 = styled.h2`
    display: inline;
    margin-right: 2rem;
`


const TodoContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [tasks, setTasks] = useState({
        today: [],
        thisweek: [],
        someday: []
    });

    const showModal = () => {
        setModalOpen(true);
    }

    const retrieveTasks = () => {

        fetch('http://localhost:8000/tasks', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setTasks({
                    today: data.today,
                    thisweek: data.thisweek,
                    someday: data.someday
                });
            });

    }

    useEffect(() => {
        retrieveTasks();
    }, [])

    const createTask = (taskData) => {
        console.log(taskData)
        fetch('http://localhost:8000/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        }).then((res) => {
            //TODO: Dont retrieve after submit, its expensive, handle it in client (context)
            retrieveTasks();
        }).catch((err) => { console.log(err) })

    }

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2><Button onClick={showModal} color="#43B929">+</Button>
            </div>

            <h3>Today</h3>
            {tasks.today.map((task) => <TodoItem done={task.done} id={task._id} title={task.title} category={task.category}></TodoItem>)}
            <h3 style={{ color: '#555', marginTop: '2rem' }}>This week</h3>
            {tasks.thisweek.map((task) => <TodoItem done={task.done} id={task._id} title={task.title} category={task.category}></TodoItem>)}
            <h3 style={{ color: '#AAA', marginTop: '2rem' }}>Someday</h3>
            { tasks.someday.map((task) => <TodoItem done={task.done} id={task._id} title={task.title} category={task.category}></TodoItem>)}

            <TodoModal open={modalOpen} setModalOpen={setModalOpen} createTask={createTask}></TodoModal>

        </Container >
    )
}

export default TodoContainer;