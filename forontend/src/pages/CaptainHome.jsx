import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaSignOutAlt } from "react-icons/fa";

import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import CaptainDetails from '../components/CaptainDetails'

const CaptainHome = () => {
    const [ridePopupPanel, setRidePopupPanel] = useState(true)
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

    const ridePopupPanelRef = useRef(null)
    const confirmRidePopupPanelRef = useRef(null)

    useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                y: "100%",
                duration: 0.5,
                ease: "power2.in"
            })
        }
    }, [ridePopupPanel])

    useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                y: "100%",
                duration: 0.5,
                ease: "power2.in"
            })
        }
    }, [confirmRidePopupPanel])

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

            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>

                <div className='h-auto p-6 bg-white rounded-t-3xl -mt-4 relative'>
                    <CaptainDetails />
                </div>

                <div
                    ref={ridePopupPanelRef}
                    className='fixed w-full z-20 bottom-0 translate-y-full bg-white px-6 py-8 rounded-t-3xl shadow-2xl'>
                    <RidePopUp
                        setRidePopupPanel={setRidePopupPanel}
                        setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                    />
                </div>

                <div
                    ref={confirmRidePopupPanelRef}
                    className='fixed w-full h-screen z-30 bottom-0 translate-y-full bg-white px-6 py-8 rounded-t-3xl shadow-2xl'>
                    <ConfirmRidePopUp
                        setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                        setRidePopupPanel={setRidePopupPanel}
                    />
                </div>

            </div>

        </div>
    )
}

export default CaptainHome