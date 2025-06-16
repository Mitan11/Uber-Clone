import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

function CaptainLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const captainData = {
            email: email,
            password: password
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captainData)

        if (res.status === 200) {
            const data = res.data
            setCaptain(data.captain)
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }


        setEmail('');
        setPassword('');
    };

    return (
        <div className='p-6 min-h-screen flex flex-col justify-between bg-white'>
            {/* Top Section */}
            <div>
                <div className='mb-4'>
                    <Link to="/">
                        <img className='w-16' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

                    </Link>
                </div>

                <div className='text-center mb-10'>
                    <h1 className='text-2xl font-bold mb-2'>Welcome back, Captain</h1>
                    {/* <p className='text-gray-600'>Sign in to your driver account</p> */}
                </div>

                <form onSubmit={submitHandler}>
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
                                placeholder='Enter your password'
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500'
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* <div className='flex justify-between items-center mb-6'>
                        <div className='flex items-center'>
                            <input
                                type='checkbox'
                                id='remember'
                                className='h-4 w-4 text-gray-700 border-gray-300 rounded focus:ring-gray-500'
                            />
                            <label htmlFor='remember' className='ml-2 text-sm text-gray-600'>
                                Remember me
                            </label>
                        </div>
                        <Link to='/forgot-password' className='text-sm text-gray-600 hover:underline'>
                            Forgot password?
                        </Link>
                    </div> */}

                    <button
                        className='bg-black text-white font-semibold mb-4 rounded-xl px-4 py-3 w-full hover:bg-gray-800 transition-all relative group'
                    >
                        Login as Captain
                        <FaArrowRight className='absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform' />
                    </button>
                </form>

                <p className='text-center text-gray-600'>
                    Join a fleet? <Link to='/captain-signup' className='text-blue-600 font-medium hover:underline'>Register as captain</Link>
                </p>
            </div>

            {/* Bottom Section */}
            <div className='mt-auto'>
                <Link
                    to='/user-login'
                    className='bg-gray-200 flex items-center justify-center text-gray-800 font-semibold rounded-xl px-4 py-3 w-full hover:bg-gray-300 transition-all'
                >
                    Sign in as Rider
                </Link>
            </div>
        </div>
    )
}

export default CaptainLogin;