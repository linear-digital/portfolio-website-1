import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SocialLogin from '../Home/Auth/SocialLogin'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase.init'
import toast from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()
    const formHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate('/')
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              toast.error(errorCode)
            });
        }
    }
     
    const [show, setShow] = useState(false)
    return (
        <div className='min-h-screen'>
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h1 className='mx-auto  text-center text-indigo-500 font-bold text-4xl logo-font'>Hazrat Ali</h1>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                            Sign in to your account
                        </h2>
                    </div>
                    <button onClick={() => show ? setShow(false) : setShow(true)} id='button-primary' className='w-[400px] mx-auto py-2 text-white text-xl mt-5'>Continue With Social</button>

                    <div className={`${show ? "flex" : "hidden"}  backdrop-blur-sm flex-col justify-center items-center absolute top-0 w-full h-screen animate_animated animate__bounceIn`}>
                        <button onClick={() => setShow(false)} className=' top-10 rounded-xl  text-black px-3 py-1 left-10 bg-white'>Close</button>
                        <SocialLogin />
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" onSubmit={formHandler}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <a
                                href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Signup
                            </a>
                        </p>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Login