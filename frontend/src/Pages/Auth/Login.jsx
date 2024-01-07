import React,{useContext} from 'react'
import AuthContext from '../../context/AuthContext'

// images
import logo from '../../assets/Images/logo.png'
import googleLogo from '../../assets/Images/googleLogo1.png'

// mui
import {  Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
      e.preventDefault()
      const email = e.target.email.value
      const password = e.target.password.value
  
      email.length > 0 && loginUser(email, password)
  
      console.log(email)
      console.log(password)
     
    }


    return (
        <div className='bg-indigo-50 h-[100vh] w-[100%] flex items-center justify-center'>
            <div className='h-[95%] w-[70%] border-2 p-3 border-white rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center'>
                <div className='grid grid-cols-4 bg-slate-200 rounded-2xl h-[100%] w-[100%]'>
                    <div className='col-span-2 h-full flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl p-4'>
                        <div className='flex flex-col gap-4  '>
                            {/* logo */}
                            <Link to='/' className={`signup-logo h-[80px] w-[200px] object-cover object-center `}></Link>
                            <div className='ml-4'>
                                <h1 className='text-2xl'>Login to continue!</h1>
                            </div>
                        </div>
                        <div className='mt-2 ml-4 grid gap-3'>
                            <form onSubmit={handleSubmit}>
                                <div className='grid items-start'>
                                    <label htmlFor="Email" className='font-semibold text-lg'>Email</label>
                                    <input name='email' className='signUp-inp' placeholder='name@gmail.com' type="email" />
                                </div>
                                <div className='grid items-start'>
                                    <div className='flex items-center justify-between'>
                                        <label htmlFor="Password" className='font-semibold text-lg'>Password</label>
                                        <Link to='/signup' className='text-sm underline text-[#613ec4]' href="#">Forgot password</Link>
                                    </div>
                                    <input name='password' className='signUp-inp' placeholder='*****************' type="password" />
                                </div>
                                <div className='grid items-start mt-4'>
                                    <Button type='submit' variant='contained' className='btn btn-contained w-full' >Login my account</Button>
                                </div>
                            </form>
                            <div className='flex items-center gap-2 justify-center'>
                                <div className='b-line'></div>
                                <p className='text-sm'>OR</p>
                                <div className='b-line'></div>
                            </div>
                            <div className='grid items-start'>
                                <Button variant='outlined' className='btn signUp-btn-outlined' > <img className='h-[20px]' src={googleLogo} alt="" /> Login with Google</Button>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <div className='flex items-center text-sm gap-2'>
                                    <p className='font-light'>Don't have an account ?</p>
                                    <Link className='font-semibold underline' to='/signup'>Sign Up</Link>
                                </div>
                                <div className='flex items-center text-sm gap-2'>
                                    <p>I agree to Dev.Quiz's</p>
                                    <Link className='font-semibold underline' to='/terms'>Terms & Conditions</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* svg */}
                    <div className='col-span-2 signUp-svg'></div>
                </div>
            </div>
        </div>
    )
}

export default Login