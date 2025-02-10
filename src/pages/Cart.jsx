import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { FaMinus, FaPlus, FaRegWindowClose } from 'react-icons/fa'
import CartTotal from '../components/CartTotal'
import Footer from '../components/Footer'

export default function Cart() {
    const { products, currency, carItems, getCartTotal } = useContext(ShopContext)

    const [carData, setCarData] = useState([])
    const [quantities, setQuantities] = useState({})

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            const initialQuantities = {};
            for (const items in carItems) {
                for (const item in carItems[items]) {
                    try {
                        if (carItems[items][item] > 0) {
                            // let product = products.find((product) => product._id === item)
                            // if (product) {
                            tempData.push({
                                _id: items,
                                color: item,
                                quantity: carItems[items][item]
                            })
                            initialQuantities[`${item}-${item}`] = carItems[items][item];

                        }
                    }
                    catch (error) {
                        console.log(error)
                    }
                }
            }
            setCarData(tempData)
            setQuantities(initialQuantities)
        }
    }, [carItems, products])

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
                    {carData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id)
                        const key = `${item._id}-${item.color}`
                        return (
                            <div key={index}>
                                <div>
                                    <div>
                                        <img src={productData.image[0]} alt="product" className='w-20 sm:w-18 rounded' />
                                    </div>
                                    <div>
                                        <div>
                                            <h5>{productData.name}</h5>
                                            <FaRegWindowClose />
                                        </div>
                                        <p>
                                            {item.color}
                                        </p>
                                        <div>
                                            <div>
                                                <button>
                                                    <FaMinus />
                                                </button>
                                                <p>
                                                    {quantities[key]}
                                                </p>
                                                <button>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                            <h4>
                                                {currency}{productData.price}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div>
                        <CartTotal />
                        <button>Process to Checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}
