import React, { useState, useEffect } from 'react';
import Button from './UI/Button'
import Modal from './UI/Modal'
import Input from './UI/Input'
import Select from './UI/Select'
import Date from './UI/Date'
import { Formik } from 'formik';

// TODO: Refactor with formik


const CreateHabit = (props) => {

    return (
        <Modal title={'New habit'} show={props.open} setModalOpen={props.setModalOpen}>
            <Formik
                initialValues={{ title: '', icon: 'exercise' }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    props.setModalOpen(false);
                    props.createHabit(values);
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
                        <Select name='icon' options={['exercise', 'study', 'brain', 'mindfulness', 'food']} value={values.category} onChange={handleChange}></Select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6rem' }}>
                        <Button type='submit' color='#43B929'>Create habit</Button>
                    </div>
                </form>)}

            </Formik>


        </Modal>
    )
}

export default CreateHabit;