import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaCar } from 'react-icons/fa';

function CaptainSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        // Signup logic would go here
        setUserData({
            fullName: {
                firstName,
                lastName,
            }, email, password,
        });

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    };

    return (
        <div className='p-6 min-h-screen flex flex-col justify-between bg-white'>
            <div>
                <div className='flex items-center mb-8'>
                    <img
                        className='w-16 mr-3'
                        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
                        alt="Captain logo"
                    />
                    <h1 className='text-2xl font-bold'>Become an Uber Captain</h1>
                </div>

                <form onSubmit={submitHandler}>
                    <h2 className='text-xl font-semibold mb-6'>Personal Information</h2>

                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Full name</label>
                        <div className='flex gap-4'>
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                                type="text"
                                placeholder='First name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                                type="text"
                                placeholder='Last name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Email address</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-gray-100 rounded-xl px-4 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                            type="email"
                            placeholder='captain@example.com'
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Password</label>
                        <div className='relative'>
                            <input
                                className='bg-gray-100 rounded-xl px-4 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all pr-12'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                type={showPassword ? "text" : "password"}
                                placeholder='Create a secure password'
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500'
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                    </div>

                    <h2 className='text-xl font-semibold mb-6 mt-10'>Vehicle Information</h2>

                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Vehicle Details</label>
                        <div className='flex gap-4 mb-4'>
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                                type="text"
                                placeholder='Vehicle Color'
                                value={vehicleColor}
                                onChange={(e) => setVehicleColor(e.target.value)}
                            />
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                                type="text"
                                placeholder='License Plate'
                                value={vehiclePlate}
                                onChange={(e) => setVehiclePlate(e.target.value)}
                            />
                        </div>
                        <div className='flex gap-4'>
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                                type="number"
                                placeholder='Passenger Capacity'
                                value={vehicleCapacity}
                                onChange={(e) => setVehicleCapacity(e.target.value)}
                                min="1"
                                max="10"
                            />
                            <div className='relative w-1/2'>
                                <select
                                    required
                                    className='bg-gray-100 w-full rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all appearance-none'
                                    value={vehicleType}
                                    onChange={(e) => setVehicleType(e.target.value)}
                                >
                                    <option value="" disabled>Vehicle Type</option>
                                    <option value="car">Car</option>
                                    <option value="auto">Auto</option>
                                    <option value="motorcycle">Motorcycle</option>
                                </select>
                                <div className='absolute bg-gray-100 right-4 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                                    <FaCar className='text-gray-500' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className='bg-black text-white font-semibold mb-4 rounded-xl px-4 py-3 w-full hover:bg-gray-800 transition-all flex items-center justify-center'
                    >
                        <FaCar className='mr-2' />
                        Become a Captain
                    </button>
                </form>

                <p className='text-center text-gray-600 mt-6'>
                    Already have an account? <Link to='/captain-login' className='text-blue-600 font-medium hover:underline'>Login here</Link>
                </p>
            </div>

            <div className='mt-6'>
                <p className='text-xs text-gray-500 text-center leading-tight'>
                    This site is protected by reCAPTCHA and the Google {' '}
                    <a href="https://policies.google.com/privacy" className='underline' target="_blank" rel="noopener noreferrer">Privacy Policy</a> and {' '}
                    <a href="https://policies.google.com/terms" className='underline' target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
                </p>
            </div>
        </div>
    );
}

export default CaptainSignup;