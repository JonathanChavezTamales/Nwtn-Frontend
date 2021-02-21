import React, { useState } from 'react';
import styled, { css } from 'styled-components'
import TodoItem from './TodoItem'
import Button from './UI/Button'
import Modal from './UI/Modal'


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

const Input = styled.input`
    font-size: ${props => props.big ? '2rem' : '1rem'};
    font-weight: ${props => props.big ? '600' : '400'};
    border: 3px solid black;
    padding: 1rem;
    width: 90%;
    margin-bottom: 1rem;

    &:focus{
        outline-width: 0;
        border: 3px dashed black;
    }
`


const TodoContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false);

    const showModal = () => {
        console.log('open please')
        setModalOpen(true);
    }

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2><Button onClick={showModal} color="#FFC914" text="+"></Button>
            </div>

            <TodoItem title="Ver curso react" done={true}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false}></TodoItem>
            <Modal show={modalOpen} setModalOpen={setModalOpen}>
                <form>
                    <Input placeholder="Task title" big={true} autoFocus></Input>
                    <Input placeholder="Optional details" autoFocus></Input>
                </form>
            </Modal>
        </Container>
    )
}

export default TodoContainer;