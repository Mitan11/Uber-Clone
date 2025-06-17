import React from 'react';
import { RiMapPinFill, RiHistoryLine, RiArrowLeftLine, RiSearchLine, RiFocus3Line } from 'react-icons/ri';

const LocationSearchPanel = (props) => {
    const locations = [
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
        "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
        "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
    ];

    const recentLocations = [
        "Home - 123 Main Street",
        "Work - Tech Park Building",
        "Gym - Fitness Center"
    ];

    return (
        <div className='w-full pb-4 bg-white h-full flex flex-col'>

            {/* Current Location */}
            <div className=''>
                <div
                    className='w-full flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 cursor-pointer hover:shadow-sm transition-all'
                    onClick={() => {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }}
                >
                    <div className='bg-blue-500 p-2 rounded-lg'>
                        <RiFocus3Line className='text-white text-lg' />
                    </div>
                    <div className='ml-4'>
                        <span className='font-semibold text-gray-900'>Use current location</span>
                        <p className='text-sm text-gray-500 mt-1'>Detect your location automatically</p>
                    </div>
                </div>
            </div>

            {/* Recent Locations */}
            <div className='mt-4'>
                <div className='flex items-center text-gray-500 mb-3'>
                    <RiHistoryLine className='mr-2 text-gray-400' />
                    <span className='text-sm font-semibold text-gray-500'>RECENT LOCATIONS</span>
                </div>

                <div className='w-full space-y-2'>
                    {recentLocations.map((location, idx) => (
                        <div
                            key={`recent-${idx}`}
                            onClick={() => {
                                props.setVehiclePanel(true);
                                props.setPanelOpen(false);
                            }}
                            className='w-full flex items-center p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors group'
                        >
                            <div className='bg-gray-100 p-2 rounded-lg group-hover:bg-gray-200 transition-colors'>
                                <RiMapPinFill className='text-gray-500' />
                            </div>
                            <div className='ml-3'>
                                <h4 className='font-medium text-gray-900'>{location.split(' - ')[0]}</h4>
                                <p className='text-sm text-gray-500'>{location.split(' - ')[1]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Suggested Locations */}
            <div className='mt-6'>
                <div className='text-gray-500 mb-3'>
                    <span className='text-sm font-semibold text-gray-500'>SUGGESTED NEAR YOU</span>
                </div>

                <div className='w-full space-y-3'>
                    {locations.map((location, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                props.setVehiclePanel(true);
                                props.setPanelOpen(false);
                            }}
                            className='w-full flex items-start p-3 rounded-xl hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors group'
                        >
                            <div className='bg-gray-100 p-2 rounded-lg mt-1 group-hover:bg-gray-200 transition-colors'>
                                <RiMapPinFill className='text-gray-500' />
                            </div>
                            <div className='ml-3 flex-1'>
                                <h4 className='font-medium text-gray-900'>{location.split(',')[0]}</h4>
                                <p className='text-sm text-gray-500'>
                                    {location.split(',').slice(1).join(',').trim()}
                                </p>
                                <div className='flex items-center mt-2'>
                                    <div className='flex items-center text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded'>
                                        <span className='w-2 h-2 rounded-full bg-blue-500 mr-1'></span>
                                        Popular spot
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>

        </div>
    );
};

export default LocationSearchPanel;