import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import { FaAngleDown } from "react-icons/fa6";
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';


const Home = () => {
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)

    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                paddingLeft: 24,
                paddingRight: 24
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                y: "100%",
                duration: 0.3,
                ease: "power2.in"
            })
        }
    }, [vehiclePanel])

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                y: "100%",
                duration: 0.3,
                ease: "power2.in"
            })
        }
    }, [confirmRidePanel])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                y: "100%",
                duration: 0.3,
                ease: "power2.in"
            })
        }
    }, [vehicleFound])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                y: "100%",
                duration: 0.3,
                ease: "power2.in"
            })
        }
    }, [waitingForDriver])

    return (
        <div className='h-screen relative overflow-hidden'>

            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div className='h-screen w-screen'>
                {/* image for temporary use  */}
                <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>

            <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>

                <div className='h-auto p-6 bg-white relative rounded-t-2xl'>

                    <div className='flex items-center justify-between'>

                        <h4 className='text-2xl font-semibold'>Find a trip</h4>

                        <h5 ref={panelCloseRef}
                            onClick={() => {
                                setPanelOpen(false)
                            }}
                            className='opacity-0  text-2xl'>
                            <FaAngleDown />
                        </h5>

                    </div>

                    <form
                        onSubmit={(e) => {
                            submitHandler(e)
                        }}>

                        <div className='mt-3 relative'>
                            <div className="line absolute h-8 w-1 top-1/2 -translate-y-1/2 left-[20px] bg-black rounded-full z-10"></div>

                            <div className='relative'>
                                <span className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-600'>
                                    <i className="ri-map-pin-range-line text-xl"></i>
                                </span>
                                <input
                                    onClick={() => {
                                        setPanelOpen(true)
                                    }}
                                    value={pickup}
                                    onChange={(e) => {
                                        setPickup(e.target.value)
                                    }}
                                    className='bg-[#eee] pl-10 pr-4 py-2.5 text-lg rounded-lg w-full 
                                    focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all'
                                    type="text"
                                    placeholder='Add a pick-up location'
                                />
                            </div>

                            <div className='relative mt-3'>
                                <span className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-600'>
                                    <i className="ri-map-pin-line text-xl"></i>
                                </span>
                                <input
                                    onClick={() => {
                                        setPanelOpen(true)
                                    }}
                                    value={destination}
                                    onChange={(e) => {
                                        setDestination(e.target.value)
                                    }}
                                    className='bg-[#eee] pl-10 pr-4 py-2.5 text-lg rounded-lg w-full
                                    focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all'
                                    type="text"
                                    placeholder='Enter your destination'
                                />
                            </div>
                        </div>

                    </form>

                </div>

                <div ref={panelRef} className='bg-white h-0 overflow-scroll'>
                    <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>

            </div>

            <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 rounded-2xl translate-y-full bg-white px-3 py-10 pt-12'>
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>

            <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 rounded-2xl translate bg-white px-3 py-6 pt-12'>
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>

            <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full rounded-2xl bg-white px-3 py-6 pt-12'>
                <LookingForDriver setVehicleFound={setVehicleFound} />
            </div>

            <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 rounded-2xl bg-white px-3 py-6 pt-12'>
                <WaitingForDriver waitingForDriver={waitingForDriver} />
            </div>

        </div>
    )
}

export default Home;