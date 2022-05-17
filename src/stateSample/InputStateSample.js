import React, { useState } from 'react'


function InputStateSample() {
    //Inputtaki datayı almak için input üzerine bir state bağlıyorum!
    let metalBands = ['Moonspell', 'Rotting Christ', 'Furtherial'];

    const [metals, setMetals] = useState(metalBands)
    const [name, setName] = useState('');



    const newMetalBand = () => {
        setName('')
        setMetals([...metals, name]);
    }


    const removeBands = () => {
        setMetals([])
    }

    return (<>
        <ul>
            {
                metals.map((item, key) => {
                   return <li key={key}>{item}</li>
                })
            }
        </ul>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => newMetalBand()}>Add New Metal Band</button>
        <div>
            <button onClick={() => removeBands()}>Remove All Bands</button>
        </div>
    </>
    )
}

export default InputStateSample