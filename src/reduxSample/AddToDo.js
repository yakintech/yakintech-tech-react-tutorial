import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../store/actions/todo.actions'

function AddToDo() {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const add = () => {

        if(name != ''){
            var randomId = Math.floor(Math.random() * 100000);

            var newTodo = {
                id: randomId,
                name: name
            }
    
            dispatch({ type: 'ADD_TODO', todo: newTodo });
           // dispatch(addToDo({ name: name }));
    
           setName('')
    
        }
    }

    return (<>

        <div>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>


    </>
    )
}

export default AddToDo