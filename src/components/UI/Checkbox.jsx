import React, { useState } from 'react';
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Checkbox = (props) => {
    return (
        <span onClick={props.onClick}>
            {
                props.checked ? < FontAwesomeIcon id='checkbox' icon={faCheckCircle} style={{ borderLeft: `3px transparent solid`, paddingLeft: '.6rem', color: '#fff', marginRight: '1rem', fontSize: '1.5rem' }} /> :
                    < FontAwesomeIcon id='checkbox' icon={faCircle} style={{ borderLeft: `2px ${props.marker} solid`, paddingLeft: '.6rem', color: '#ddd', marginRight: '1rem', fontSize: '1.5rem' }} />
            }
        </span>
    )
}

export default Checkbox;