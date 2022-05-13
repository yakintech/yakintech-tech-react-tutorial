import React, { useState } from 'react'

function StateSample2() {

    const [counter, setCounter] = useState(0);

    return (<>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </>

    )
}

export default StateSample2