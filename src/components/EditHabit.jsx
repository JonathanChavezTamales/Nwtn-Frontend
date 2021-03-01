import React, { useState, useEffect } from 'react';
import Button from './UI/Button'
import Modal from './UI/Modal'
import Input from './UI/Input'
import Select from './UI/Select'
import Date from './UI/Date'
import { Formik } from 'formik';
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
                        <Select name='icon' options={['exercise', 'study', 'brain', 'mindfulness', 'food']} value={values.icon} onChange={handleChange}></Select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
                        <Button type='submit' color='#43B929' big>Update habit</Button>
                        <Button onClick={() => { deleteHabit(); props.setModalOpen(false) }} color='#A63D40' big alternate>Delete habit</Button>
                    </div>
                </form>)}

            </Formik>

        </Modal>
    )

}

export default EditTodo