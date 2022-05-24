import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AutocompleteSample() {

    const [categories, setcategories] = useState([]);


    useEffect(() => {

        axios.get("https://northwind.vercel.app/api/categories")
            .then((res) => {

                let autoData = [];

                res.data.forEach(element => {
                    
                    autoData.push({label:element.name, name: element.id})

                });

                setcategories(autoData)

            });

    }, [])


    return (<>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={categories}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Categories" />}
            />
        </>
    )
}

export default AutocompleteSample