import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function UserSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        // Signup logic would go here
        setUserData({
            fullName: {
                firstName,
                lastName,
            },
            email,
            password
        });

        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
    };

    return (
        <div className='p-6 h-screen flex flex-col justify-between bg-white'>
            <div>
                <div className='mb-8'>
                    <img
                        className='w-16'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
                        alt="Uber logo"
                    />
                </div>

                <h1 className='text-2xl font-bold mb-8'>Create your account</h1>

                <form onSubmit={submitHandler}>
                    <div className='mb-6'>
                        <label className='block text-gray-700 font-medium mb-2'>Full name</label>
                        <div className='flex gap-4'>
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
                                type="text"
                                placeholder='First name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                required
                                className='bg-gray-100 w-1/2 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all'
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
                                placeholder='Create a password'
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

                    <button
                        className='bg-black text-white font-semibold mb-4 rounded-lg px-4 py-3 w-full hover:bg-gray-800 transition-all'
                    >
                        Create account
                    </button>
                </form>

                <p className='text-center text-gray-600'>
                    Already have an account? <Link to='/user-login' className='text-blue-600 font-medium hover:underline'>Login here</Link>
                </p>
            </div>

            <div className='mt-4'>
                <p className='text-xs text-gray-500 text-center leading-tight'>
                    This site is protected by reCAPTCHA and the Google {' '}
                    <a href="https://policies.google.com/privacy" className='underline' target="_blank" rel="noopener noreferrer">Privacy Policy</a> and {' '}
                    <a href="https://policies.google.com/terms" className='underline' target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
                </p>
            </div>
        </div>
    );
}

export default UserSignup;