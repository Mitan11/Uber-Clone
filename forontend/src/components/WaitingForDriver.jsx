import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const WaitingForDriver = (props) => {
    return (
        <div className="relative">
            <button 
                onClick={() => props.waitingForDriver(false)}
                className="absolute -top-11 left-1/2 -translate-x-1/2 w-12 h-12 
                flex items-center justify-center"
            >
                <FaAngleDown className="text-2xl text-gray-600" />
            </button>

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

            <div className="w-full mt-6 flex items-center justify-center">
                <div className="flex items-center gap-3 text-gray-600">
                    <div className="animate-pulse w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="animate-pulse w-2 h-2 rounded-full bg-gray-600" style={{ animationDelay: '0.2s' }}></div>
                    <div className="animate-pulse w-2 h-2 rounded-full bg-gray-600" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    )
}

export default WaitingForDriver