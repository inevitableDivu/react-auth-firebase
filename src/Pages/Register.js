import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import { useAuth } from '../context/AuthContext'
import { useHistory, Link } from 'react-router-dom'

function Register() {
    const { isValid, register, currentUser } = useAuth()
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        isValid({
            name: data.name,
            email: data.email,
            password: data.password,
        }, () => {
            register(data.name, data.email, data.password)
        })
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const handleChange = (type) => e => {
        setData({ ...data, [type]: e.target.value })
    }

    useEffect(() => {
        if (currentUser)
            history.push('/')
    }, [currentUser])

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm">
                            <div className='my-2'>
                                <Input
                                    label="Name"
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    onChange={handleChange('name')}
                                />
                            </div>
                            <div className='my-2'>
                                <Input
                                    label="Email Address"
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    onChange={handleChange('email')}
                                />
                            </div>
                            <div className='my-2'>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    label="Password"
                                    onChange={handleChange('password')}
                                />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button onClick={handleSubmit} loading={loading}>
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    <div className="mt-4">
                        <div className="grid grid-cols-8 place-items-center">
                            <div className="flex items-center col-span-3 w-full">
                                <span className="w-full h-0.5 bg-gray-300"></span>
                            </div>
                            <div className="col-span-2 uppercase text-xs font-semibold text-gray-400 underline"><Link to='/login'>or login</Link></div>
                            <div className="flex items-center col-span-3 w-full">
                                <span className="w-full h-0.5 bg-gray-300"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
