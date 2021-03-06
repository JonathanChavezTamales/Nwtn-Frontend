import React, { useState } from 'react';
import styled from 'styled-components'
import { Field } from 'formik'



const RadioGroup = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {props.options && props.options.map((option) => {
                return (<div>
                    <Field type='radio' name={props.name} id={option} value={option}></Field>
                    <label for={option}>{option}</label>
                </div>)
            })}
        </div>
    )
}

export default RadioGroup;