import React from 'react'

function JsxElementEvents() {

    const hello = () => {
        alert('Hello JSX')
    }

    return (<>
        <button onClick={() => alert('Hello JSX')}>Hello Jsx</button>
        <button onClick={hello}>Hello Jsx - 2</button>
        <button onClick={() => hello()}>Hello Jsx - 3</button>
    </>

    )
}

export default JsxElementEvents