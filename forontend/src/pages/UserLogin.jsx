import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

function UserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext)


    const submitHandler = async (e) => {
        e.preventDefault();
        // Login logic would go here
        const userData = {
            email: email,
            password: password
        }

        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

        if (res.status === 200) {
            const data = res.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        setEmail('');
        setPassword('');
    };

    return (
        <div className='p-6 h-screen flex flex-col justify-between bg-white'>
            {/* Top Section */}
            <div>
                <div className='mb-8'>
                    <img
                        className='w-16'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
                        alt="Uber logo"
                    />
                </div>

                <h1 className='text-2xl font-bold mb-8'>Welcome back</h1>

                <form onSubmit={submitHandler}>
                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Email address</label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='bg-gray-100 rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                            type="email"
                            placeholder='email@example.com'
                        />
                    </div>

                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Password</label>
                        <div className='relative'>
                            <input
                                className='bg-gray-100 rounded-lg px-4 py-3 w-full text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all pr-12'
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
                        className='bg-black text-white font-semibold mb-4 rounded-lg px-4 py-3 w-full hover:bg-gray-800 transition-all relative group'
                    >
                        Login
                        <FaArrowRight className='absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform' />
                    </button>
                </form>

                <p className='text-center text-gray-600'>
                    New here? <Link to='/user-signup' className='text-blue-600 font-medium hover:underline'>Create new Account</Link>
                </p>
            </div>

            {/* Bottom Section */}
            <div>
                <Link
                    to='/captain-login'
                    className='bg-[#10b461] flex items-center justify-center text-white font-semibold rounded-lg px-4 py-3 w-full hover:bg-green-700 transition-all'
                >
                    Sign in as Captain
                </Link>
            </div>
        </div>
    );
}

export default UserLogin;