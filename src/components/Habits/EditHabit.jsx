import React, { useState, useEffect } from 'react';
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Select from '../UI/Select'
import { Formik } from 'formik';
import { ResponsiveCalendar } from '@nivo/calendar'
import moment from 'moment'

// TODO: Instead of calling api for filling values, pull them from context

const EditTodo = (props) => {

    const [habit, setHabit] = useState({})

    const retrieveHabit = (id) => {
        console.log(`http://localhost:8000/habits/${id}`)
        fetch(`http://localhost:8000/habits/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setHabit(data);
            });
    }

    const updateHabit = (habitData) => {
        fetch(`http://localhost:8000/habits/${props._id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(habitData)
        }).then((res) => {
            //TODO: Update local state to show when changed instead of reload
            window.location.reload()
        }).catch((err) => { console.log(err) })
    }

    const deleteHabit = () => {

        fetch(`http://localhost:8000/habits/${props._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            //TODO: Update local state to show when deleted instead of reload
            window.location.reload();
        }).catch((err) => { console.log('fallo') })
    }

    useEffect(() => {
        retrieveHabit(props._id);
    }, [props._id])

    return (
        <Modal title={'Edit habit'} show={props.open} setModalOpen={props.setModalOpen}>
            <Formik
                enableReinitialize
                initialValues={habit ? habit : { title: '', icon: 'exercise' }}
                onSubmit={(values, { resetForm }) => {
                    props.setModalOpen(false);
                    updateHabit(values)
                    resetForm();
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (<form onSubmit={handleSubmit}>
                    <Input name='title' value={values.title} required placeholder="Habit title" big={true} autoFocus onChange={handleChange}></Input>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Select name='icon' options={['exercise', 'study', 'brain', 'mindfulness', 'food', 'music']} value={values.icon} onChange={handleChange}></Select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
                        <Button onClick={() => { deleteHabit(); props.setModalOpen(false) }} color='#A63D40' big alternate>Delete habit</Button>
                        <Button type='submit' color='#43B929' big>Update habit</Button>
                    </div>
                </form>)}

            </Formik>

            {
                habit.completed &&
                <div style={{ height: '10rem', width: '50rem' }}>
                    <ResponsiveCalendar data={habit.completed.map((date) => { return { day: moment(date).format('YYYY-MM-DD'), number: 1 } })}
                        from="2021-05-01"
                        to="2021-08-01"
                        emptyColor="#eeeeee"
                        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                        margin={{ right: 40, left: 40, top: 40 }}
                        yearSpacing={40}
                        monthBorderColor="#ffffff"
                        dayBorderWidth={1}
                        dayBorderColor="#ffffff"
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'row',
                                translateY: 36,
                                itemCount: 4,
                                itemWidth: 42,
                                itemHeight: 36,
                                itemsSpacing: 14,
                                itemDirection: 'right-to-left'
                            }
                        ]}
                    ></ResponsiveCalendar>
                </div>

            }




        </Modal >
    )

}

export default EditTodo