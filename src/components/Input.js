import React from 'react'

function Input({ label, ...rest }) {
    return (
        <>
            <label htmlFor="email-address" className="sr-only">
                {label}
            </label>
            <input
                {...rest}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={label}
            />
        </>
    )
}

export default Input
