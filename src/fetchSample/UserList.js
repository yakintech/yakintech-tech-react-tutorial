import React, { useEffect, useState } from 'react'

function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getData();

    }, []);


    const getData = () => {
        //HTTP GET metodu ile veri çekiyorum... (default olarak fetch GET isteği yapıyor.)
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTimeout(() => {
                    setUsers(data);
                    setLoading(false);
                }, 2000);
            })
            .catch(() => {
                setLoading(false);

            })
    }


    const removeUser = (id) => {

        let requestOptions = {
            method: 'DELETE'
        }
        //fetch ile web servisten mevcut kullanıcı silinecek
        fetch('https://jsonplaceholder.typicode.com/users/' + id, requestOptions)
        .then(res => res.json())
        .then((data) => {
            let newUsers = users.filter(q => q.id != id);
            setUsers(newUsers)
        })

    }



    return (<>
        {
            loading == true ? <span>loading...</span> :

                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>User Name</td>
                        <td>EMail</td>
                        <td>Remove</td>
                    </tr>
                    {
                        users && users.map((item, key) => {
                            return <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td><button onClick={() => removeUser(item.id)}>Remove</button></td>
                            </tr>
                        })
                    }
                </table>
        }
    </>



    )
}

export default UserList