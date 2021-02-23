import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components'
import TodoItem from './TodoItem'
import Button from './UI/Button'
import TodoModal from './AddTodo'


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

        let p = [{ title: 'tarea de gante', category: 'Escuela', due: 1614055416762, done: true },
        { title: 'cacota', category: 'Escuela', due: 1614099999000, done: SVGComponentTransferFunctionElement },
        { title: 'cobrar a rivera', category: undefined, due: 1619099999000, done: false }]

        // Classify by due date (TODO: Do this on server instead)
        let todayMidnight = new window.Date();
        todayMidnight.setHours(23, 59, 59, 0);

        let satMidnight = new window.Date();
        satMidnight.setDate(satMidnight.getDate() + 6 - satMidnight.getDay());
        satMidnight.setHours(23, 59, 59, 0);


        const today = p.filter((task) => task.due < todayMidnight)
        const thisweek = p.filter((task) => task.due >= todayMidnight && task.due < satMidnight)
        const someday = p.filter((task) => task.due >= satMidnight)

        setTasks({ today, thisweek, someday })
    }

    useEffect(() => {
        retrieveTasks();
    }, [])

    const createTask = (taskData) => {
        setTasks({ ...tasks, today: [...tasks.today, taskData] })
    }

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2><Button onClick={showModal} color="#43B929">+</Button>
            </div>

            <h3>Today</h3>
            {tasks.today.map((task) => <TodoItem done={task.done} title={task.title}></TodoItem>)}
            <h3 style={{ color: '#555' }}>This week</h3>
            {tasks.thisweek.map((task) => <TodoItem done={task.done} title={task.title}></TodoItem>)}
            <h3 style={{ color: '#AAA' }}>Someday</h3>
            {tasks.someday.map((task) => <TodoItem done={task.done} title={task.title}></TodoItem>)}

            <TodoModal open={modalOpen} setModalOpen={setModalOpen} createTask={createTask}></TodoModal>

        </Container>
    )
}

export default TodoContainer;