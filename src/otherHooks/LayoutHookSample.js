import React, { useEffect, useLayoutEffect, useRef } from 'react'

function LayoutHookSample() {

    let h1Ref = useRef();

    useEffect(() => {
      
        console.log('use effect');
        h1Ref = 'h2'

        console.log('h1 Ref - useEffect', h1Ref);


    }, [])

    //useLayoutEffect önce çalışır daha sonra dom oluşur!! (paint işlemi)
    useLayoutEffect(() => {
      
        console.log('layout effect');
        console.log('h1 Ref - useLayoutEffect', h1Ref);

    }, [])
    


  return (<>
  {
      console.log('DOM RENDER')
  }

    <h1 ref={h1Ref}>Çağatay</h1>

  </>)
}

export default LayoutHookSample