import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'


function ProductDataGrid() {


    const [products, setProducts] = useState([]);


    const columns = [
        {
            field: 'id',
            headerName: 'Product Id',
            width: 150
        },
        {
            field: 'name',
            headerName: 'Product Name',
            width: 150
        },
        {
            field: 'unitPrice',
            headerName: 'Price',
            width: 150
        },
        {
            field: 'unitsInStock',
            headerName: 'Stock',
            width: 150
        }
    ]

    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/products")
            .then(res => setProducts(res.data))

    }, [])

    return (<>
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                columns={columns}
                rows={products}
                pageSize={5}
                checkboxSelection
            >

            </DataGrid>
        </div>

    </>
    )
}

export default ProductDataGrid