import React, { useState, useEffect } from 'react';
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Select from '../UI/Select'
import Date from '../UI/Date'
import TextArea from '../UI/TextArea'
import { Formik } from 'formik';

// TODO: Instead of calling api for filling values, pull them from context

const EditTodo = (props) => {

    const [task, setTask] = useState({})

    const retrieveTask = (id) => {
        console.log(`http://localhost:8000/tasks/${id}`)
        fetch(`http://localhost:8000/tasks/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                console.log(data.due)
                setTask(data);
            });
    }

    const updateTask = (taskData) => {
        fetch(`http://localhost:8000/tasks/${props._id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        }).then((res) => {
            //TODO: Update local state to show when changed instead of reload
            window.location.reload()
        }).catch((err) => { console.log(err) })
    }

    const deleteTask = () => {
        fetch(`http://localhost:8000/tasks/${props._id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            //TODO: Update local state to show when deleted instead of reload
            window.location.reload()
        }).catch((err) => { console.log(err) })
    }

    useEffect(() => {
        retrieveTask(props._id);
    }, [props._id])

    return (
        <Modal title={'Edit task'} show={props.open} setModalOpen={props.setModalOpen}>


            <Formik
                enableReinitialize
                initialValues={task ? task : { title: '', details: '', category: undefined, due: new window.Date().toISOString().split('T')[0] }}
                onSubmit={(values, { resetForm }) => {
                    props.setModalOpen(false);
                    updateTask(values);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (<form onSubmit={handleSubmit}>
                    <Input autoComplete="off" name='title' value={values.title} required placeholder="Task title" big={true} autoFocus onChange={handleChange}></Input>
                    <TextArea autoComplete="off" onChange={handleChange} rows={10} name='details' value={values.details} cols={64} placeholder='Optional details'></TextArea>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Select name='category' placeholder='Select category' options={['HyperK', 'Personal', 'Escuela', 'Side Projects']} value={values.category} onChange={handleChange}></Select>
                        <Date name='due' value={values.due} onChange={handleChange}></Date>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '6rem' }}>
                        <Button onClick={() => { deleteTask(); props.setModalOpen(false) }} color='#A63D40' big alternate>Delete task</Button>
                        <Button type='submit' color='#43B929' big>Update task</Button>
                    </div>

                </form>)}

            </Formik>
        </Modal>
    )

}

export default EditTodo