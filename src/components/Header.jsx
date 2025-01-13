import React from 'react'
import Navbar from './Navbar'
import { FaBars } from 'react-icons/fa'

const Header = () => {
    return (
        <header className='max-padd-container w-full mb-2'>

            {/* Logo */}
            <div className='flexBetween py-3 bg-primary'>
                <Link to="/" className=" flex flex-1 bold-28 bg-red-500 ">
                    E-commerce
                </Link>


                {/* Navbar */}
                <div className='flex-1 bg-yellow-500'>
                    <Navbar />
                </div>

                {/* Button */}
                <div className='flex-1 flex bg-green-500'>

                    {/* Menu Toggle */}
                    <>
                        <FaBars />
                    </>

                    {/* Cart */}
                    <Link>
                        <div>
                            Cart
                        </div>
                    </Link>

                    {/* User Profile */}
                    <button>
                        Login
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
