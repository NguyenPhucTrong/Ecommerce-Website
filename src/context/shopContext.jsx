import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/data'
import { useNavigate } from 'react-router-dom'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const currency = "$";
    const delivery_charges = 10;
    const [cartItems, setCartItems] = useState([])

    const addToCart = async (itemId, color) => {
        let carData = structuredClone(cartItems)
        if (carData[itemId]) {
            if (carData[itemId][color]) {
                carData[itemId][color] += 1
            }
            else {
                carData[itemId][color] = 1
            }
        } else {
            carData[itemId] = {}
            carData[itemId][color] = 1
        }
        setCartItems(carData)
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const value = { products, search, setSearch, currency, delivery_charges, cartItems, setCartItems, addToCart }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
