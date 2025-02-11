import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import Title from './Title'

export default function CartTotal() {
    const { products, currency, delivery_charges, getCartTotal, updateQuantity, getCartAmount } = useContext(ShopContext)

    return (
        <section className='w-full '>
            <Title title1={"Cart"} title2={"Total"} title1Styles={"h3"} />
            <div className='flexBetween pt-3'>
                <h5 className='h5'>SubTotal:</h5>
                <p className='h5'>
                    {currency} {getCartAmount()}.00
                </p>
            </div>
            <div>
                <h5>Shipping Fee:</h5>
                <p>
                    {getCartAmount() === 0 ? "0.00" : `${currency}${delivery_charges}.00`}
                </p>
            </div>
        </section>
    )
}
