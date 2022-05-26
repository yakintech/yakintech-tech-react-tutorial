import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { cartContext } from '../store/cartContext';

function ProductList() {

    const { cart, setCart } = useContext(cartContext)
    const [products, setProducts] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then((res) => {

                setProducts(res.data)
            })

    }, [])


    const goToDetail = (id) => {

        navigate(`/urunler/${id}`);

    }

    const addToCart = (item) => {

        //eğer ürün sepette varsa adedini bir arttırır yoksa ürünü sepete ekler.

        let cartProduct = cart.find(q => q.id == item.id);

        if(cartProduct){

            cartProduct.quantity = cartProduct.quantity + 1;
            setCart([...cart]);
        }
        else{
            let newCartProduct = {
                id: item.id,
                name: item.name,
                price: item.unitPrice,
                quantity : 1
            }

            setCart([...cart, newCartProduct])
        }

    }

    const decreaseToCart = (item) => {

        //Eğer sepette ürün yoksa  zaten bu fonksiyon çalışmamalı

        let cartProduct = cart.find(q => q.id == item.id);

        if(cartProduct){
            cartProduct.quantity = cartProduct.quantity - 1;

            //Eğer ürün adedi 0 olduysa onu sepetten de çıkarmamız gerek
            if(cartProduct.quantity == 0){
               let newCart = cart.filter(q => q.id != cartProduct.id);
               setCart(newCart)
            }
            else{
                setCart([...cart])
            }
        


        }


    }

    return (<>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Unit Price</td>
                    <td>Detail</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td><Link to={'/urunler/' + item.id}>{item.name}</Link></td>
                            <td>{item.unitPrice}</td>
                            <td><button onClick={() => goToDetail(item.id)}>Go To Detail</button></td>
                            <td>
                                <button onClick={() => decreaseToCart(item)}> - </button>

                                <button onClick={() => addToCart(item)}> + </button>
                                </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default ProductList