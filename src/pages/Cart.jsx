import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'
import { ShopContext } from '../context/shopContext'

export default function Cart() {
    const { products, currency, cartItems, getCartTotal, updateQuantity, getCartAmount } = useContext(ShopContext)

    const [carData, setCarData] = useState([])
    const [quantities, setQuantities] = useState({})

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities = {};
            for (const items in cartItems) {
                for (const item in cartItems[items]) {

                    if (cartItems[items][item] > 0) {
                        // let product = products.find((product) => product._id === item)
                        // if (product) {
                        tempData.push({
                            _id: items,
                            color: item,
                            quantity: cartItems[items][item]
                        })
                        initialQuantities[`${items}-${item}`] = cartItems[items][item];

                    }

                }
            }
            setCarData(tempData)
            console.log("tempData", tempData)
            setQuantities(initialQuantities)
            console.log("initialQuantities", initialQuantities)
        }
    }, [cartItems, products])


    const increment = (id, color) => {
        const key = `${id}-${color}`
        const newValue = quantities[key] + 1
        setQuantities((prev) => ({ ...prev, [key]: newValue }))
        updateQuantity(id, color, newValue)
    }
    const decrement = (id, color) => {
        const key = `${id}-${color}`
        if (quantities[key] > 1) {
            const newValue = quantities[key] - 1
            setQuantities((prev) => ({ ...prev, [key]: newValue }))
            updateQuantity(id, color, newValue)
        }
    }

    return (
        <section >
            <div className="bg-primary mb-16">
                <div className='max-padd-container py-18 '>

                    {/* Title */}
                    <div className='flexStart gap-x-4'>
                        <Title title1={'Cart'} title2={"List"} title1Styles={"h3"} />
                        <h5 className='medium-15 text-gray-30 relative '>({getCartTotal()} Items)</h5>
                    </div>
                    {/* Container */}
                    <div className='mt-6'>
                        {carData.map((item, index) => {
                            const productData = products.find((product) => product._id === item._id)
                            const key = `${item._id}-${item.color}`
                            return (
                                <div key={index} className=' bg-white p-2 mb-3 rounded-lg'>
                                    <div className='flex items-center gap-x-3'>
                                        <div className='flex items-start gap-x-6'>
                                            <img src={productData.image[0]} alt="product" className='w-20 sm:w-18 rounded' />
                                        </div>
                                        <div className='flex flex-col w-full'>
                                            <div className='flexBetween '>
                                                <h5 className='h5 !my-0 line-clamp-1'>{productData.name}</h5>
                                                <FaRegWindowClose className='cursor-pointer text-secondary'
                                                    onClick={() => updateQuantity(item._id, item.color, 0)}
                                                />
                                            </div>
                                            <p className='bold-14 my-0.5'>
                                                {item.color}
                                            </p>
                                            <div className="flexBetween">
                                                <div className='flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary'>
                                                    <button className='p-1.5 bg-white text-secondary rounded-full shadow-md'>
                                                        <FaMinus className='text-xs'
                                                            onClick={() => { decrement(item._id, item.color) }}
                                                        />
                                                    </button>
                                                    <p className='px-2'>
                                                        {quantities[key]}
                                                    </p>
                                                    <button className='p-1.5 bg-white text-secondary rounded-full shadow-md'>
                                                        <FaPlus className='text-xs'
                                                            onClick={() => increment(item._id, item.color)} />
                                                    </button>
                                                </div>
                                                <h4 className='h4'>
                                                    {currency}{productData.price}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex my-20'>
                    <div className='w-full m:w-[450px]'>
                        <CartTotal />
                        <button className="btn-secondary mt-7">Process to Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
