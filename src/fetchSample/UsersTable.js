import React from 'react'

function UsersTable(props) {


    return (
        <table>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>User Name</td>
                <td>EMail</td>
            </tr>
            {
                props.users && props.users.map((item, key) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                })
            }
        </table>
    )
}

export default UsersTable