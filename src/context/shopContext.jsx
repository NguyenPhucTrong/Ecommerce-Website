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
    const [cartItems, setCartItems] = useState({})


    const addToCart = (itemId, color) => {
        if (!color) {
            toast.error('Please select a color')
            return
        }

        let carData = structuredClone(cartItems)
        console.log("cartItems before update:", cartItems);
        if (carData[itemId]) {
            if (carData[itemId][color]) {
                carData[itemId][color] += 1
            } else {
                carData[itemId][color] = 1
            }
        } else {
            carData[itemId] = {}
            carData[itemId][color] = 1
        }
        setCartItems(carData)
        console.log("cartItems after update:", carData);
    }

    const getCartTotal = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
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

    const updateQuantity = async (itemId, color, quantity) => {
        let carData = structuredClone(cartItems)
        // if (carData[itemId]) {
        //     if (carData[itemId][color]) {
        carData[itemId][color] = quantity
        //     }
        // }
        setCartItems(carData)
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount
    }

    useEffect(() => {
        console.log("Updated cartItems:", cartItems)
    }, [cartItems])

    const value = { products, search, setSearch, currency, delivery_charges, cartItems, setCartItems, addToCart, getCartTotal, updateQuantity, getCartAmount }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
