import React, { useState, useEffect } from 'react';
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import Input from '../UI/Input'
import Select from '../UI/Select'
import Date from '../UI/Date'
import TextArea from '../UI/TextArea'
import { Formik } from 'formik';

const CreateTodo = (props) => {

    return (
        <Modal title={'New task'} show={props.open} setModalOpen={props.setModalOpen}>
            <Formik
                enableReinitialize
                initialValues={props.values ? props.values : { title: '', details: '', category: undefined, due: new window.Date().toISOString().split('T')[0] }}
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
                    <TextArea autoComplete="off" onChange={handleChange} rows={10} name='details' value={values.details} cols={64} placeholder='Optional details'></TextArea>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Select name='category' placeholder='Select category' options={['HyperK', 'Personal', 'Escuela', 'Side Projects']} value={values.category} onChange={handleChange}></Select>
                        <Date name='due' value={values.due} onChange={handleChange}></Date>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
                        <Button type='submit' color='#43B929'>Create task</Button>
                    </div>

                </form>)}

            </Formik>

            {props.children}
        </Modal>
    )
}

export default CreateTodo;