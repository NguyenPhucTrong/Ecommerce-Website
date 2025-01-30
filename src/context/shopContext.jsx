import React, { createContext, useState } from 'react'
import { products } from '../assets/data'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const currency = 10;


    const value = { products, search, setSearch, currency }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
