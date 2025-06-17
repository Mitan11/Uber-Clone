import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaSignOutAlt, FaAngleUp } from 'react-icons/fa'

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                y: "100%",
                duration: 0.5,
                ease: "power2.in"
            })
        }
    }, [finishRidePanel])

    return (
        <div className='h-screen relative overflow-hidden'>
            <div className='fixed top-0 left-0 right-0 p-6 flex items-center justify-between z-10'>
                <img
                    className='w-16'
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber Logo"
                />
                <Link
                    to='/captain-home'
                    className='h-12 w-12 bg-white shadow-lg flex items-center justify-center 
                    rounded-full hover:bg-gray-50 transition-colors'
                >
                    <FaSignOutAlt className="text-xl text-gray-600" />
                </Link>
            </div>

            <div className='h-screen w-screen'>
                <img
                    className='h-full w-full object-cover'
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Map View"
                />
            </div>

            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-auto w-full p-6 flex items-center justify-between relative bg-yellow-300 border-t border-yellow-200'>

                    <h4 className='text-xl font-semibold'>4 KM away</h4>
                    
                    <button 
                        className='bg-black text-white font-medium py-3 px-8 rounded-xl 
                        hover:bg-gray-800 active:scale-[0.98] transition-all'
                        onClick={() => setFinishRidePanel(true)}
                    >
                        Complete Ride
                    </button>
                </div>
            </div>

            <div 
                ref={finishRidePanelRef} 
                className='fixed w-full z-20 bottom-0 translate-y-full bg-white 
                px-6 py-8 rounded-t-3xl shadow-2xl'
            >
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding