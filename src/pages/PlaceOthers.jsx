import React from 'react'
import Title from '../components/Title'

export default function PlaceOthers() {
    return (
        <div>
            <div>
                {/* Container */}
                <form>
                    <div>
                        {/* Left Side */}
                        <div>
                            <Title title1={"Delivery"} title2={"Information"} />
                            <div>
                                <input type="text" name="firstName" placeholder='FirstName'
                                    className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
