import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function ToDoList() {

    var todos = useSelector(todoState => todoState);

    var dispatch = useDispatch();
    var dispatch2 = useDispatch();


    const deleteToDo = (item) => {

        dispatch({ type: 'DELETE_TODO', todo: item })

    }

    const removeAll = () => {
        dispatch({ type: 'REMOVE_ALL' })
    }

    return (<>
        <button onClick={() => removeAll()}>Remove All Todos</button>
        <ul>
            {
                todos && todos.map((item, key) => {
                    return <Fragment key={key}>
                        <li>{item.name}</li>
                        <button onClick={() => deleteToDo(item)}>Delete Tod</button>
                    </Fragment>
                })
            }
        </ul>

    </>)
}

export default ToDoList