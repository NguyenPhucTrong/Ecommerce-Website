import React, { useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { FaSearch } from 'react-icons/fa'
import { useContext } from 'react'

const Search = () => {
    const { search, setSearch } = useContext(ShopContext)

    return (
        <div className='py-4 pb-7'>
            <div className='text-center'>
                <div className='inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-white overflow-hidden w-full'>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search here...'
                        className='border-none outline-none w-full bg-white text-sm' />
                    <div>
                        <FaSearch className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
