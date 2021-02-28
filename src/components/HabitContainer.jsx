import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import HabitItem from './HabitItem'
import Button from './UI/Button'
import CreateHabit from './CreateHabit'

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
    const [habits, setHabits] = useState([])
    const showModal = () => {
        setModalOpen(true);
    }

    const retrieveHabits = () => {

        fetch('http://localhost:8000/habits', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setHabits(data);
            });

    }

    useEffect(() => {
        retrieveHabits();
    }, [])

    const createHabit = (habitData) => {
        console.log("creating ")
        console.log(habitData)
        fetch('http://localhost:8000/habits', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habitData)
        }).then((res) => {
            //TODO: Dont retrieve after submit, its expensive, handle it in client (context)
            retrieveHabits();
        }).catch((err) => { console.log(err) })


    }

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <H2>Habits</H2><Button color="#43B929" onClick={showModal}>+</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {habits.map((habit) => <HabitItem title={habit.title} done={habit.completedToday} id={habit._id} icon={habit.icon} />)}
            </div>

            <CreateHabit open={modalOpen} setModalOpen={setModalOpen} createHabit={createHabit}></CreateHabit>
        </Container>
    )
}

export default HabitContainer;