import React from 'react'
import { FaAngleDown } from "react-icons/fa6";

const VehiclePanel = (props) => {
    return (
        <div className="relative">
            <button
                onClick={() => props.setVehiclePanel(false)}
                className="absolute -top-11 left-1/2 -translate-x-1/2 w-12 h-12 
                flex items-center justify-center "
            >
                <FaAngleDown className="text-2xl text-gray-600" />
            </button>

            <h3 className='text-2xl font-semibold mb-6'>Choose a Vehicle</h3>

            <div className="space-y-3">
                <div
                    onClick={() => {
                        props.setConfirmRidePanel(true)
                        props.setVehiclePanel(false)
                    }}
                    className='flex border-2 border-gray-100 hover:border-gray-200 active:border-black 
                    rounded-xl w-full p-4 items-center justify-between cursor-pointer transition-all
                    hover:shadow-md active:scale-[0.98]'
                >
                    <img className='h-12 w-12 object-contain' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="UberGo" />
                    <div className='ml-3 flex-1'>
                        <div className="flex items-center gap-2">
                            <h4 className='font-medium text-base'>UberGo</h4>
                            <span className="text-gray-500"><i className="ri-user-3-fill"></i>4</span>
                        </div>
                        <h5 className='font-medium text-sm text-gray-600'>2 mins away</h5>
                        <p className='font-normal text-xs text-gray-500'>Affordable, compact rides</p>
                    </div>
                    <h2 className='text-lg font-semibold ml-4'>₹193.20</h2>
                </div>

                <div
                    onClick={() => props.setConfirmRidePanel(true)}
                    className='flex border-2 border-gray-100 hover:border-gray-200 active:border-black 
                    rounded-xl w-full p-4 items-center justify-between cursor-pointer transition-all
                    hover:shadow-md active:scale-[0.98]'
                >
                    <img className='h-12 w-12 object-contain' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="Moto" />
                    <div className='ml-3 flex-1'>
                        <div className="flex items-center gap-2">
                            <h4 className='font-medium text-base'>Moto</h4>
                            <span className="text-gray-500"><i className="ri-user-3-fill"></i>1</span>
                        </div>
                        <h5 className='font-medium text-sm text-gray-600'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-500'>Affordable motorcycle rides</p>
                    </div>
                    <h2 className='text-lg font-semibold ml-4'>₹65</h2>
                </div>

                <div
                    onClick={() => props.setConfirmRidePanel(true)}
                    className='flex border-2 border-gray-100 hover:border-gray-200 active:border-black 
                    rounded-xl w-full p-4 items-center justify-between cursor-pointer transition-all
                    hover:shadow-md active:scale-[0.98]'
                >
                    <img className='h-12 w-12 object-contain' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="UberAuto" />
                    <div className='ml-3 flex-1'>
                        <div className="flex items-center gap-2">
                            <h4 className='font-medium text-base'>UberAuto</h4>
                            <span className="text-gray-500"><i className="ri-user-3-fill"></i>3</span>
                        </div>
                        <h5 className='font-medium text-sm text-gray-600'>3 mins away</h5>
                        <p className='font-normal text-xs text-gray-500'>Affordable Auto rides</p>
                    </div>
                    <h2 className='text-lg font-semibold ml-4'>₹118.86</h2>
                </div>
            </div>
        </div>
    )
}

export default VehiclePanel