import React, { useRef } from 'react'
import Title from './Title';

function RefParent() {

    var titleRef = useRef();

    function changeColor(){
        titleRef.current.style.color = 'tomato';
    }

  return (
      <>
          <Title ref={titleRef}></Title>

          <button onClick={() => changeColor()}>Change Color</button>
      </>

  )
}

export default RefParent