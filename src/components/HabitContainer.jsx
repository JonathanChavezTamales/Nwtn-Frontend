import React, { useState } from 'react';
import styled from 'styled-components'
import HabitItem from './HabitItem'
import Button from './UI/Button'
import HabitModal from './HabitModal'

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

const HabitContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [habits, setHabits] = useState([{ title: "Comer una verdura o fruta", done: true, icon: 'food' },
    { title: 'Hacer ejercicio', done: false, icon: 'exercise' }, { title: 'estudiar', done: false, icon: 'study' }, { title: 'nofap', done: false, icon: 'brain' }, { title: 'meditar', done: false, icon: 'mindfulness' }]);

    const showModal = () => {
        setModalOpen(true);
    }

    const createHabit = (habitData) => {
        setHabits([...habits, habitData]);
    }

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <H2>Habits</H2><Button color="#43B929" onClick={showModal}>+</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {habits.map((habit) => <HabitItem title={habit.title} done={habit.done} icon={habit.icon} />)}
            </div>

            <HabitModal open={modalOpen} setModalOpen={setModalOpen} createHabit={createHabit}></HabitModal>
        </Container>
    )
}

export default HabitContainer;