import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";

const FinishRide = (props) => {
    return (
        <div className="space-y-6">
            <button
                className='absolute top-1 left-1/2 -translate-x-1/2 w-12 h-12 
                rounded-full flex items-center justify-center '
                onClick={() => props.setFinishRidePanel(false)}
            >
                <FaAngleDown className="text-xl text-gray-600" />
            </button>

            <h3 className='text-2xl font-semibold mt-4'>Finish this Ride</h3>

            <div className='flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-xl'>
                <div className='flex items-center gap-4'>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                            className='h-full w-full object-cover'
                            src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                            alt="Rider Profile"
                        />
                    </div>
                    <h2 className='text-lg font-medium'>Harshi Pateliya</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>

            <div className='space-y-1'>
                <div className='flex items-center gap-4 p-4 border-b border-gray-100'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-map-pin-user-fill text-gray-600"></i>
                    </div>
                    <div className="flex-1">
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-500'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 p-4 border-b border-gray-100'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-map-pin-2-fill text-gray-600"></i>
                    </div>
                    <div className="flex-1">
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm text-gray-500'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                <div className='flex items-center gap-4 p-4'>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="ri-currency-line text-gray-600"></i>
                    </div>
                    <div className="flex-1">
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-sm text-gray-500'>Cash Payment</p>
                    </div>
                </div>
            </div>

            <Link
                to='/captain-home'
                className='w-full flex justify-center bg-black text-white font-medium 
                py-3.5 rounded-xl hover:bg-gray-800 active:scale-[0.98] transition-all'
            >
                Finish Ride
            </Link>
        </div>
    )
}

export default FinishRide