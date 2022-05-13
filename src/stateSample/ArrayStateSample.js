import React, { useState } from 'react'

function ArrayStateSample() {

    let cityList = ['İstanbul', 'İzmir', 'Ankara', 'Diyarbakır', 'Trabzon', 'Aydın'];

    const [cities, setCityList] = useState(cityList);


    const loadCity = () => {
        setCityList(cityList)
    }

    return (<>
        <ul>
            {
                cities.map((item, index) => <li key={index}>{item}</li>)
            }
            
        </ul>

        <button onClick={() => setCityList([])}>Empty City</button>
        <button onClick={() => loadCity()}>Load City</button>

    </>
    )
}

export default ArrayStateSample