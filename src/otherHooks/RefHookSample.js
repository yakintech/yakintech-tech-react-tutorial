import React, { useRef, useState } from 'react'

function RefHookSample() {

    //1. yol
    //     const [h1color, seth1Color] = useState('')

    //   return (<>
    //     <h1 style={{color:h1color}}>Çağatay Yıldız</h1>
    //     <button onClick={() => seth1Color('tomato')}>Change H1 Color</button>
    //   </> 
    //   )


    //2.yol

    // const changeColor = () => {

    //     document.getElementById('title').style.color = 'tomato';
    // }

    // return (<>
    //     <h1 id='title'>Çağatay Yıldız</h1>
    //     <button onClick={() => changeColor()}>Change Color</button>
    // </>)


    //3. yol

    let h1Ref = useRef();
    
    const changeColor = () => {

        h1Ref.current.style.color = 'red';

    }

    return (<>
        <h1 ref={h1Ref}>Çağatay Yıldız</h1>
        <button onClick={() => changeColor()}>Change Color</button>
    </>
    )
}

export default RefHookSample