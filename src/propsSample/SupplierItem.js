import React from 'react'

function SupplierItem(props) {

    const removeSupplier = (id) => {
        props.deleteItem(id);
    }

    return (
        <div>
            <p>Company Name: {props.supplier.companyName}</p>
            <p>Contact Name: {props.supplier.contactName}</p>
            <p>Contact Title: {props.supplier.contactTitle}</p>
            <button onClick={() => removeSupplier(props.supplier.id)}>Remove</button>
        </div>
    )
}

export default SupplierItem