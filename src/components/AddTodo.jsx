import React, { useState, useEffect } from 'react';
import Button from './UI/Button'
import Modal from './UI/Modal'
import Input from './UI/Input'
import Select from './UI/Select'
import Date from './UI/Date'
import { Formik } from 'formik';

// TODO: Refactor with formik


const TodoModal = (props) => {

    return (
        <Modal show={props.open} setModalOpen={props.setModalOpen}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '3rem' }}>New task</h1>
            </div>

            <Formik
                initialValues={{ title: '', details: '', category: undefined, due: new window.Date().toISOString().split('T')[0] }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    props.setModalOpen(false);
                    props.createTask(values);
                    resetForm();
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (<form onSubmit={handleSubmit}>
                    <Input name='title' value={values.title} required placeholder="Task title" big={true} autoFocus onChange={handleChange}></Input>
                    <Input name='details' value={values.details} placeholder="Optional details" onChange={handleChange}></Input>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Select name='category' value={values.category} onChange={handleChange}></Select>
                        <Date name='due' value={values.due} onChange={handleChange}></Date>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
                        <Button type='submit' color='#43B929'>create task</Button>
                    </div>

                </form>)}

            </Formik>


        </Modal>
    )
}

export default TodoModal;