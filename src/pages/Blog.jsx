import React from 'react'
import { blogs } from '../assets/data'

const Blog = () => {
    return (
        <div>
            <div className='bg-primary mb-16 pb-16'>

                <div className='max-padd-container py-10'>



                    {/* CONTAINER */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12 pt-6'>
                        {blogs.slice(0, 4).map((blog) => (
                            <div key={blog.title} className='relative'>
                                <img src={blog.image} alt="blogImg" className='rounded-xl' />
                                {/* INFO */}

                                <p className='medium-14 mt-6'>{blog.category}</p>
                                <h5 className='h5 pr-4 mb-1'>{blog.title}</h5>
                                <p className='line-clamp-3 py-1'>
                                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                                </p>
                                <button className='underline mt-2 bold-14'>
                                    Continue Reading
                                </button>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
