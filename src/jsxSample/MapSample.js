import React from 'react'

function MapSample() {

    let countries = ['USA', 'Iran', 'Japan', 'Turkey', 'Russia', 'England', 'Iraq']


    return (<>
        <h1>Country List</h1>
        <ul>
            {/* Buradaki key elemanın index numarasını belirtir */}

            {
                // countries.map((item,key) => {
                //     return <li>{item}</li>
                // })

                countries.map((item,key) => (<li>{item}</li>))
            }

        </ul>
    </>

    )
}

export default MapSample