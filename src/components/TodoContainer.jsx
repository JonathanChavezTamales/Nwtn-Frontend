import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import TodoItem from './TodoItem'
import Button from './UI/Button'
import Modal from './UI/Modal'
import Input from './UI/Input'
import Select from './UI/Select'
import Date from './UI/Date'


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

    const showModal = () => {
        console.log('open please')
        setModalOpen(true);
    }

    const createTask = () => {
        setModalOpen(false);
        // Do some logic here
    }

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2><Button onClick={showModal} color="#00CC99">+</Button>
            </div>
            <h3>Today</h3>
            <TodoItem title="Ver curso react" done={true}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false} important={true} color='#51bbfe'></TodoItem>
            <TodoItem title="Ver videos malware" done={false} color='#51bbfe'></TodoItem>
            <TodoItem title="Contestar a todas las señoras" done={false}></TodoItem>
            <h3 style={{ color: '#555' }}>This week</h3>
            <h3 style={{ color: '#AAA' }}>Someday</h3>

            <Modal show={modalOpen} setModalOpen={setModalOpen}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem' }}>New task</h1>
                </div>

                <form>
                    <Input placeholder="Task title" big={true} autoFocus></Input>
                    <Input placeholder="Optional details" autoFocus></Input>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Select></Select>
                        <Date></Date>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
                        <Button color='#00CC99' onClick={createTask}>Create task</Button>
                    </div>

                </form>
            </Modal>
        </Container>
    )
}

export default TodoContainer;