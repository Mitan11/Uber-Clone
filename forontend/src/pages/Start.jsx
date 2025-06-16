import React from 'react'

function Start() {
    return (
        <div className='relative bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen flex flex-col justify-between w-full overflow-hidden'>

            {/* Logo */}
            <div className='relative z-10 pt-6 md:pt-8 pl-5 md:pl-6'>
                <img
                    className='w-14 md:w-16'
                    src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417"
                    alt="Uber logo"
                />
            </div>

            {/* Content Card - Responsive adjustments */}
            <div className='relative z-10 bg-white pb-6 md:pb-8 pt-5 md:pt-6 px-5 md:px-6 mx-auto w-full max-w-md rounded-t-2xl shadow-xl transform transition-transform duration-300 hover:scale-[1.01]'>
                <div className='mb-4 md:mb-5'>
                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>Get Started with Uber</h2>
                    <p className='text-gray-600 mt-2 text-sm sm:text-base'>
                        Sign in to request a ride or track your driver
                    </p>
                </div>

                <Link
                    to='/user-login'
                    role="button"
                    className='relative flex items-center justify-center w-full bg-black text-white py-3 sm:py-4 rounded-xl font-medium hover:bg-gray-900 transition-all duration-300 group text-base sm:text-lg'
                >
                    Continue
                    <FaArrowRight className='absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform' />
                </Link>

                <p className='text-center text-gray-600 mt-4 text-xs sm:text-sm'>
                    Don't have an account? <Link to="/user-signup" className='font-semibold text-black underline hover:no-underline'>Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Start