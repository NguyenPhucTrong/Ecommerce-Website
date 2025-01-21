import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const Features = () => {
    return (
        <section className='max-padd-container mt-16'>
            {/* Container */}
            <div className='max-padd-container flexCenter flex-wrap gap-8 rounded-2xl'>
                <div className='flexCenter gap-x-3'>
                    <RiMoneyDollarCircleLine className='text-3xl' />
                    <div>
                        <h4 className='medium-15'>MONEY-BACK GUARANTEE</h4>
                        <p>100% refund guaranteed if you're not satisfied</p>
                    </div>
                    <div className='flexCenter gap-x-3'>
                        <TbTruckDelivery className='text-3xl' />
                        <div>
                            <h4 className='medium-15'>FREE SHIPPING & RETURNS </h4>
                            <p>Free shipping available on all orders above $99</p>
                        </div>
                    </div>

                    <div className='flexCenter gap-x-3'>
                        <BiSupport className='text-3xl' />
                        <div>
                            <h4 className='medium-15'>24/7 ONLINE SUPPORT</h4>
                            <p>Our team is here to assist you round the clock</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
