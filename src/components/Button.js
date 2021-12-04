import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'

function Button({ children, onClick, loading }) {
    return (
        <button
            type="submit"
            onClick={onClick}
            disabled={loading}
            className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-opacity-70 disabled:cursor-default"
        >
            {
                loading ? (
                    <span className="animate-spin h-5 w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-full w-full"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="#fff" /></svg>
                    </span>
                ) : (
                    <>
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        {children}
                    </>
                )
            }
        </button>
    )
}

export default Button
