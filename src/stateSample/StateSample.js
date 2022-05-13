import React, { useState } from 'react'

function StateSample() {

    //name değişkenin adı. setName değişkeni değiştirecek metot. useState içerisindeki Çağatay ise değişkenin default değeri
    const [name, setName] = useState('Çağatay');
    

    return (<>
        <h1>{name}</h1>
        <button onClick={() => setName('Tech Career!')}>Change Name</button>
    </>
    )
}

export default StateSample