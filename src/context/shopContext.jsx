import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/data'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const currency = "$";
    const delivery_charges = 10;
    const [cartItems, setCartItems] = useState([])

    const addToCart = async (itemId, color) => {
        if (!color) {
            toast.error('Please select a color')
            return
        }

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

    const getCartTotal = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[item]) {
                try {
                    if (cartItems[items][item] > 0) {
                        // let product = products.find((product) => product._id === item)
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalCount
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const value = { products, search, setSearch, currency, delivery_charges, cartItems, setCartItems, addToCart, getCartTotal }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
