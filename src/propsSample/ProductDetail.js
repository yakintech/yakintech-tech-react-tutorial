import React from 'react'

//Bir child component bir üst componentinden veri alıyor
function ProductDetail(props) {
    return (<>
        <h1>Product Detail Page</h1>
        <div>
            <p>Name: {props.name}</p>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    </>
    )
}

export default ProductDetail