import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {

    const { logout } = useAuth()

    return (
        <>
            <nav className='w-full shadow-md'>
                <div className="container mx-auto px-3 md:px-5 lg:px-8 h-14">
                    <div className="flex justify-between items-center h-full">
                        <div className="">
                            <Link to='/users' className="px-4 text-sm uppercase font-semibold">Users</Link>
                            <Link to='/resources' className="px-4 text-sm uppercase font-semibold">Resources</Link>
                        </div>
                        <button onClick={() => logout()} className='px-5 py-2 text-sm font-semibold bg-indigo-600 rounded-md text-white'>Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
