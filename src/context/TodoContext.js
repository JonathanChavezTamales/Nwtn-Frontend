import React, {createContext, useState} from 'react'

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {

    const [tasks, setTasks] = useState({
        today: [],
        thisweek: [],
        someday: []
    });

    return (
        <TodoContext.Provider value={{tasks, setTasks}}>
            {children}
        </TodoContext.Provider>
    )
}
