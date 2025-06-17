import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";

const Riding = () => {
    return (
        <div className='h-screen relative'>
            <Link 
                to='/home' 
                className='fixed right-4 top-4 h-12 w-12 bg-white shadow-lg 
                flex items-center justify-center rounded-full hover:bg-gray-50 
                transition-colors z-10'
            >
                <FaHome className="text-xl text-gray-600" />
            </Link>

            <div className='h-1/2 relative'>
                <img 
                    className='h-full w-full object-cover' 
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" 
                    alt="Map View" 
                />
            </div>

            <div className='h-1/2 p-6 bg-white rounded-t-3xl -mt-4 relative'>
                <div className='flex items-center justify-between mb-6'>
                    <div className="w-16 h-16">
                        <img 
                            className='w-full h-full object-contain' 
                            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" 
                            alt="Vehicle" 
                        />
                    </div>
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-500'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='w-full space-y-1'>
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

                <button 
                    className='w-full mt-6 bg-black text-white font-medium py-3.5 rounded-xl
                    hover:bg-gray-800 active:scale-[0.98] transition-all'
                >
                    Make a Payment
                </button>
            </div>
        </div>
    )
}

export default Riding