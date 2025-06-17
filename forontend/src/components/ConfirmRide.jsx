import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const ConfirmRide = (props) => {
    return (
        <div className="relative">
            <button
                onClick={() => props.setConfirmRidePanel(false)}
                className="absolute -top-11 left-1/2 -translate-x-1/2 w-12 h-12 
                flex items-center justify-center"
            >
                <FaAngleDown className="text-2xl text-gray-600" />
            </button>

            <h3 className='text-2xl font-semibold mb-6'>Confirm your Ride</h3>

            <div className='flex flex-col items-center'>
                <div className="w-full max-w-[200px] mb-6">
                    <img
                        className='w-full h-auto object-contain'
                        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                        alt="Selected Vehicle"
                    />
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

                <button
                    className='w-full mt-6 bg-black text-white font-medium py-3.5 rounded-xl
                    hover:bg-gray-800 active:scale-[0.98] transition-all'
                    onClick={() => {
                        props.setVehicleFound(true)
                        props.setConfirmRidePanel(false)

                    }}
                >
                    Confirm Ride
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide