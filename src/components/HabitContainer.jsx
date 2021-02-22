import React from 'react';
import styled from 'styled-components'
import HabitItem from './HabitItem'
import Button from './UI/Button'

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

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <H2>Habits</H2><Button color="#FE654F">+</Button>
            </div>
            <HabitItem title="Comer una verdura o fruta" done={true}></HabitItem>
            <HabitItem title="Hacer ejercicio" done={false}></HabitItem>
            <HabitItem title="Meditar 5 horas" done={false}></HabitItem>
        </Container>
    )
}

export default HabitContainer;