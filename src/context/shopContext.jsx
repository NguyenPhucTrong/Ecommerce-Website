import React, { createContext } from 'react'
import { products } from '../assets/data'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
    const value = { products }

    return (
        <Shop