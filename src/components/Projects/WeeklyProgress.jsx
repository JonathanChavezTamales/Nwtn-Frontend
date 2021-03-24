import React, { useState, useEffect } from 'react';
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeeklySection = ({ project }) => {

    const [tasks, setTasks] = useState([]);

    const retrieveTasks = () => {
        fetch(`http://localhost:8000/tasks/project/${project}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                console.log(data)
            });
    }

    useEffect(() => {
        retrieveTasks();
    }, [])

    return (
        <>
            <h2 style={{ fontWeight: 300 }}>Jonathan's tasks</h2>
            {tasks.map((task) =>
                <div style={{ marginBottom: '.6rem' }}>
                    {task.completed ? < FontAwesomeIcon icon={faCheckCircle} style={{ color: '#43B929', marginRight: '1rem' }} /> : < FontAwesomeIcon icon={faCircle} style={{ color: '#aaa', marginRight: '1rem' }} />}
                    {task.title}
                </div>)
            }
        </>
    )
}

export default WeeklySection;