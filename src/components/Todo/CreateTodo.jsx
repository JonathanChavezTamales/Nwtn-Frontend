import React, { useState, useEffect } from 'react';
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import RadioGroup from '../UI/RadioGroup'
import Date from '../UI/Date'
import TextArea from '../UI/TextArea'
import { Formik, Field } from 'formik';

const CreateTodo = (props) => {

    return (
        <Modal title={'New task'} show={props.open} setModalOpen={props.setModalOpen}>
            <Formik
                enableReinitialize
                initialValues={props.values ? props.values : { title: '', details: '', important: false, category: undefined, due: new window.Date().toISOString().split('T')[0] }}
                onSubmit={(values, { resetForm }) => {
                    props.setModalOpen(false);
                    props.createTask(values);
                    console.log(values)
                    resetForm();
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (<form onSubmit={handleSubmit}>
                    <Input autoComplete="off" name='title' value={values.title} required placeholder="Task title" big={true} autoFocus onChange={handleChange}></Input>
                    <TextArea autoComplete="off" onChange={handleChange} rows={5} name='details' value={values.details} cols={64} placeholder='Optional details'></TextArea>
                    <div style={{ display: 'flex', marginBottom: '2rem', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <RadioGroup onChange={handleChange} value={values.category} name='category' options={['HyperK', 'Personal', 'Escuela', 'Side Projects']}></RadioGroup>
                        <Date name='due' value={values.due} onChange={handleChange}></Date>
                    </div>
                    <Field type='checkbox' name='important' id="important" checked={values.important}></Field><label for="important">Important</label>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                        <Button type='submit' color='#43B929'>Create task</Button>
                    </div>
                </form>)}

            </Formik>

            {props.children}
        </Modal>
    )
}

export default CreateTodo;