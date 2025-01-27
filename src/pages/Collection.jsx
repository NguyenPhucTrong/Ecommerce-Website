import React, { useContext } from 'react'
import Search from '../components/Search'
import { ShopContext } from '../context/shopContext';

const Collection = () => {

    const { products } = useContext(ShopContext)

    return (
        <div className='max-padd-container !px-0'>
            <div className='flex flex-col sm:flex-row gap-8 mb-16'>
                {/* FILTERS */}
                <div className='min-w-72 bg-primary p-4 mt-8 pl-16 lg:pl-12 '>
                    <Search />
                    <div className='pl-5 py-3 mt-4 bg-white rounded-xl'>
                        <h5 className='h5 mb-4'>Categories</h5>
                        <div className='flex flex-col gap-2 text-sm font-light'>
                            {
                                [
                                    "Headphones",
                                    "Cameras",
                                    "Mobiles",
                                    "Speakers",
                                    "Mouse",
                                    "Watches"
                                ]
                                    .map((cat) => (
                                        <label key={cat} className='flex gap-2 medium-14 text-gray-30'>
                                            <input

                                                type='checkbox' value={cat} className='w-3' />
                                            {cat}
                                        </label>
                                    ))
                            }
                        </div>
                    </div>
                    <div>
                        <h5>
                            Sort by
                        </h5>
                        <select name="" id="">
                            <option value="relevant">Relevant</option>
                            <option value="low">Low</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div>
                    <div>
                        products
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection
