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

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Tasks</H2><Button onClick={showModal} color="#FFC914">+</Button>
            </div>

            <TodoItem title="Ver curso react" done={true}></TodoItem>
            <TodoItem title="Ponerme al corriente Tec" done={false} important={true} color='#51bbfe'></TodoItem>
            <TodoItem title="Ver videos malware" done={false} color='#51bbfe'></TodoItem>
            <TodoItem title="Contestar a todas las señoras" done={false}></TodoItem>
            <Modal show={modalOpen} setModalOpen={setModalOpen}>
                <form>
                    <Input placeholder="Task title" big={true} autoFocus></Input>
                    <Input placeholder="Optional details" autoFocus></Input>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Select></Select>
                        <Date></Date>
                    </div>

                </form>
            </Modal>
        </Container>
    )
}

export default TodoContainer;