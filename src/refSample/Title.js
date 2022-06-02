import React, { forwardRef } from 'react'

function Title(props, ref) {

  return (<h1 ref={ref}>Çağatay Yıldız</h1>)
}



export default forwardRef(Title)