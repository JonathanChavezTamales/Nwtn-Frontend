import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import TodoItem from './TodoItem'
import Button from '../UI/Button'
import CreateTodo from './CreateTodo'
import KeyboardEventHandler from 'react-keyboard-event-handler';
import moment from 'moment';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Options from '../UI/Options'


const Container = styled.div`
    width: 33%;
    margin-left: 2rem;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`

const H2 = styled.h2`
    display: inline;
    font-weight: 300;
    margin-right: 2rem;
`

const Option = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 3px 0px;
    margin-top: 6px;
    cursor: pointer;
    color: ${props => props.active ? '#333' : '#999'};
    font-size: .9rem;
    text-align: left;
`


const TodoContainer = ({ tasks, retrieveTasks }) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [options, setOptions] = useState({open: false, subtasks: false, completed: true});

    const showModal = () => {
        setModalOpen(true);
    }

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
            <KeyboardEventHandler handleKeys={['t']}
                onKeyEvent={showModal}></KeyboardEventHandler>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2>
                
                <Button onClick={showModal} color="#43B929">+</Button>
                <div style={{width:'100%', textAlign:'end', position:'relative', paddingRight:'3px'}} >
                    <FontAwesomeIcon id='checkbox' icon={faCog} style={{ color:'bbb',cursor:'pointer', position:'inherit', zIndex:'5' }} onClick={() => {setOptions({...options, open:!options.open})}}></FontAwesomeIcon>
                    {options.open &&  
                        <Options width='10rem'>
                            <Option active={options.subtasks} onClick={() => {setOptions({...options, subtasks:!options.subtasks})}}>Show subtasks</Option>
                            <Option active={options.completed} onClick={() => {setOptions({...options, completed:!options.completed})}}>Show completed</Option>
                        </Options>
                    }
                   
                </div>
            </div>

            {tasks.today && <>

                < h3 style={{ fontWeight: 500 }} >Today ({moment().format('dddd')})</h3>
                {tasks.today.length === 0 && <small>No tasks for today. Go enjoy your life!</small>}
                { tasks.today.map((task) => <TodoItem important={task.important} key={task._id} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}

                <h3 style={{ color: '#555', marginTop: '2rem', fontWeight: 300 }}>Rest of the week</h3>
                { tasks.thisweek.map((task) => <TodoItem important={task.important} key={task._id} reminder={moment(task.due).fromNow()} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}

                <h3 style={{ color: '#AAA', marginTop: '2rem', fontWeight: 300 }}>Someday</h3>
                { tasks.someday.map((task) => <TodoItem important={task.important} key={task._id} reminder={moment(task.due).fromNow()} done={task.completed} _id={task._id} title={task.title} category={task.category}></TodoItem>)}

                {tasks.length === 0 && "You don't have any tasks yet. Start adding them :D"}

                {modalOpen && <CreateTodo open={modalOpen} setModalOpen={setModalOpen} createTask={createTask}></CreateTodo>
                }
            </>
            }

        </Container >
    )
}

export default TodoContainer;