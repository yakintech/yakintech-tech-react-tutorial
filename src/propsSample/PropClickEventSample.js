import React from 'react'

function PropClickEventSample(props) {
    

  return (
    <button onClick={() =>  props.hello()}> Hello props!!</button>
  )
}

export default PropClickEventSample