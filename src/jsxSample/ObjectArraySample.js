import React from 'react'

function ObjectArraySample() {

    let webUsers = [
        {
            name: 'Çağatay',
            surname: 'Yıldız',
            onlineStatus: false
        },
        {
            name: 'Aylin',
            surname: 'Ece',
            onlineStatus: false
        }, {
            name: 'Can',
            surname: 'Onen',
            onlineStatus: true
        }, {
            name: 'Aslı',
            surname: 'Onen',
            onlineStatus: false
        }
    ]
    //Eğer kullanıcının durumu true ise o satır KIRMIZI OLSUN
    return (
        <>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    {/* <td>Status</td> */}
                </tr>

                {
                    webUsers.map((item, key) => {
                        if (item.onlineStatus === true) {
                            return <tr style={{color:'tomato'}}>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                                {/* <td>{item.onlineStatus.toString()}</td> */}
                            </tr>
                        }
                        else{
                            return <tr>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            {/* <td>{item.onlineStatus.toString()}</td> */}
                        </tr>
                        }

                    })
                }
            </table>
        </>
    )
}

export default ObjectArraySample