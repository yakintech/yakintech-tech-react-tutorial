import axios from 'axios'
import React, { useState } from 'react'



function AddCategoryWithAxios() {


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addNewCategory = () => {

        let newCategory = {
            name: name,
            description: description
        }

        axios.post("https://northwind.vercel.app/api/categories", newCategory)
        .then(res => console.log('Axios response: ', res))

    }

    
    return (<>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
            <label>Description:</label>
            <input type='text' onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div>
            <button onClick={() => addNewCategory()}>Add</button>
        </div>
    </>
    )
}

export default AddCategoryWithAxios