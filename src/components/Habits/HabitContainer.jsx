import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import HabitItem from './HabitItem'
import Button from '../UI/Button'
import CreateHabit from './CreateHabit'

const Container = styled.div`
    width: 30%;
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

const HabitContainer = (props) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [habits, setHabits] = useState([])
    const showModal = () => {
        setModalOpen(true);
    }
    const [fetched, setFetched] = useState(false)

    const retrieveHabits = () => {

        fetch('http://localhost:8000/habits', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setHabits(data);
                setFetched(true);
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
                {!fetched ? '' :
                    habits.map((habit) => <HabitItem key={habit._id} title={habit.title} done={habit.completedToday} id={habit._id} icon={habit.icon} streak={habit.streak} />)
                }
                {fetched && habits.length === 0 && "You don't have any habits yet. Add one ;)"}
            </div>
            {
                modalOpen && <CreateHabit open={modalOpen} setModalOpen={setModalOpen} createHabit={createHabit}></CreateHabit>
            }
        </Container>
    )
}

export default HabitContainer;