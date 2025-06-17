import React from 'react'

const CaptainDetails = () => {
    return (
        <div className="space-y-6">
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img 
                            className='h-full w-full object-cover' 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" 
                            alt="Captain Profile" 
                        />
                    </div>
                    <h4 className='text-lg font-medium'>Harsh Patel</h4>
                </div>
                <div className="text-right">
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-500'>Earned</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-2xl'>
                <div className='text-center'>
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="text-2xl text-gray-600 ri-timer-2-line"></i>
                    </div>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-500'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="text-2xl text-gray-600 ri-speed-up-line"></i>
                    </div>
                    <h5 className='text-lg font-medium'>4.8</h5>
                    <p className='text-sm text-gray-500'>Avg. Rating</p>
                </div>
                <div className='text-center'>
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                        <i className="text-2xl text-gray-600 ri-booklet-line"></i>
                    </div>
                    <h5 className='text-lg font-medium'>156</h5>
                    <p className='text-sm text-gray-500'>Total Rides</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails