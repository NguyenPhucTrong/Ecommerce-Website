import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay } from 'swiper/modules';
import Title from './Title';
import Item from './Item';
import { products } from '../assets/data';
import { ShopContext } from '../context/shopContext';

const NewArrivals = () => {
    const { products } = useContext(ShopContext)
    const [PopularProducts, setPopularProducts] = useState([])
    useEffect(() => {
        const data = products.slice(0, 7)
        setPopularProducts(data)
    }, [products])
    return (
        <section className='max-padd-container pt-16'>
            <Title
                title1={"New"}
                title2={"Arrivals"}
                titleStyles={"pd-14"}
                paraStyles={"!block"} />

            {/* CONTAINER */}
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    666: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    900: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1300: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}

                modules={[Autoplay]}
                className="h-[399px] mt-5"
            >{
                    PopularProducts.map((product) => {
                        return (
                            <SwiperSlide key={product._id}>
                                <Item product={product} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default NewArrivals