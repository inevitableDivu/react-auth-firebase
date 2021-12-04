import React, { useState, useEffect, useContext } from "react";
import { Auth, auth } from '../firebase'
import { toast } from 'react-toastify'
import validator from 'validator'
import { useHistory } from 'react-router-dom'

const AuthenticationContext = React.createContext()

const configuration = {
    theme: 'dark',
    autoClose: 2000
}

export function useAuth() {
    return useContext(AuthenticationContext)
}

function AuthContext({ children }) {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)
    const history = useHistory()

    async function login(email, password) {
        return await Auth.signInWithEmailAndPassword(auth, email, password).then(() => {
            toast.success('Logged In Successfully ✌', configuration)
        }).catch(() => {
            toast.error('Something went wrong 😣', configuration)
        })
    }

    async function register(name, email, password) {
        return await Auth.createUserWithEmailAndPassword(auth, email, password).then(() => {
            toast.success('Registration Successful ✌', configuration)
            Auth.updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                console.log('Updated')
            }).catch(() => {
                console.log('Something Went Wrong')
            })
        }).catch(() => {
            toast.error('Something went wrong 😣', configuration)
        })
    }

    async function logout() {
        return await Auth.signOut(auth).then(() => {
            toast.success('Logged out successfully', configuration)
        }).catch(() => {
            toast.error('Something went wrong', configuration)
        })
    }

    function isValid({ name, email = '', password = '' }, cb) {
        if (!validator.isEmail(email)) {
            cb = () => { }
            toast.error('Invalid Email', configuration)
            return;
        } else if (password.length > 16 || password.length < 6) {
            cb = () => { }
            toast.error('Password must be of 6 to 16 characters', configuration)
            return;
        } else if (name && validator.isEmpty(name)) {
            toast.error('Invalid Name', configuration)
            return;
        } else {
            return cb()
        }
    }

    useEffect(() => {
        const unsubscribe = Auth.onAuthStateChanged(auth, (data) => {
            setCurrentUser(data)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        register,
        isValid,
        logout
    }
    return (
        <AuthenticationContext.Provider value={value} >
            {!loading && children
            }
        </AuthenticationContext.Provider>
    )
}

export default AuthContext
