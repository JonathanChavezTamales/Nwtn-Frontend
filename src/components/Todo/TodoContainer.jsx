import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TodoItem from './TodoItem'
import Button from '../UI/Button'
import CreateTodo from './CreateTodo'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import moment from 'moment';



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
    const [fetched, setFetched] = useState(false)

    const showModal = () => {
        setModalOpen(true);
    }

    const retrieveTasks = () => {
        fetch('http://localhost:8000/tasks', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setTasks({
                    expired: data.expired,
                    today: data.today,
                    thisweek: data.thisweek,
                    someday: data.someday
                });
                console.log(data)
                setFetched(true)
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
            <KeyboardEventHandler handleKeys={['n']}
                onKeyEvent={showModal}></KeyboardEventHandler>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2><Button onClick={showModal} color="#43B929">+</Button>
            </div>

            {!fetched ? '' :
                <>
                    {tasks.expired.length > 0 && < h3 style={{ color: '#ff0054', fontWeight: 300 }} >Expired</h3>}
                    { tasks.expired.map((task) => <TodoItem important={task.important} key={task._id} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}

                    < h3 style={{ marginTop: tasks.expired.length > 0 ? '2rem' : 'default', fontWeight: 300 }} >Today ({moment().format('dddd')})</h3>
                    {tasks.today.length === 0 && <small>No tasks for today. Go enjoy your life!</small>}
                    { tasks.today.map((task) => <TodoItem important={task.important} key={task._id} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}

                    <h3 style={{ color: '#555', marginTop: '2rem', fontWeight: 300 }}>Rest of the week</h3>
                    { tasks.thisweek.map((task) => <TodoItem important={task.important} key={task._id} reminder={moment(task.due).fromNow()} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}

                    <h3 style={{ color: '#AAA', marginTop: '2rem', fontWeight: 300 }}>Someday</h3>
                    { tasks.someday.map((task) => <TodoItem important={task.important} key={task._id} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}
                </>}

            {fetched && tasks.length === 0 && "You don't have any tasks yet. Start adding them :D"}

            {modalOpen && <CreateTodo open={modalOpen} setModalOpen={setModalOpen} createTask={createTask}></CreateTodo>
            }

        </Container >
    )
}

export default TodoContainer;