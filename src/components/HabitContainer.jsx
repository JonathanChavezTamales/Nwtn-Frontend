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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                <H2>Habits</H2><Button color="#43B929">+</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <HabitItem title="Comer una verdura o fruta" done={true} icon='food'></HabitItem>
                <HabitItem title="Hacer ejercicio" done={false} icon='exercise'></HabitItem>
                <HabitItem title="Meditar 5 horas" done={false} icon='mindfulness'></HabitItem>
                <HabitItem title="Estudiar por mi cuenta" done={true} icon='study' />
                <HabitItem title="NoFap" done={false} icon='brain' />
            </div>

        </Container>
    )
}

export default HabitContainer;