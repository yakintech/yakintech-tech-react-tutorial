import React, { useEffect, useState } from 'react'

function EffectSample1() {

    const [sayac, setSayac] = useState(0);
    const [sayac2, setSayac2] = useState(0);



   //maliyetli bir işlem
   useEffect(() => {
    console.log('Bu kod satırı sadece component yüklendiğinde ÇALIŞIR!!');
   }, []);


   useEffect(() => {
    console.log('Sayaç - 2 state değişti!!');
   }, [sayac2])
   
   

  return (<>
    <h1>{sayac}</h1>
    <button onClick={() => setSayac(sayac + 1)}>Arttır</button>

    <h1>{sayac2}</h1>
    <button onClick={() => setSayac2(sayac2 + 1)}>Arttır</button>
    </>
  )
}

export default EffectSample1