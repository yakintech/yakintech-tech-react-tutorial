import React from 'react'

function TechButton(props) {
  return (
    <button style={{color:'tomato', width:props.width, width:props.height}}>{props.title}</button>
  )
}

export default TechButton