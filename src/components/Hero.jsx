import React from 'react'
import headphones from '../assets/headphones.png';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
    return (
        <section className='max-padd-container'>
            <div className='grid grid-cols-2 bg-hero bg-cover bg-center bg-no-repeat rounded-2xl h-[633px]'>
                {/* Left Side */}
                <div className='place-content-end max-xs:min-w-80'>
                    <div lang='text-white p-4'>
                        <p className='text-white max-w-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quisquam repellendus hic modi facere vel ullam! Atque reprehenderit sunt rerum dicta, incidunt unde necessitatibus et id esse laudantium iusto dolor!</p>
                        <button className='btn-white mt-6'>Explore more</button>
                    </div>
                </div>
                {/* Right Side */}
                <div>
                    <div>
                        <img src={headphones} alt="" />
                        <button>
                            Explore this product
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
