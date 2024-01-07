import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext'

// images
import logo from '../../assets/Images/logo.png'
import googleLogo from '../../assets/Images/googleLogo1.png'

// mui
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const { registerUser } = useContext(AuthContext)

  console.log(email);
  console.log(username);
  console.log(password);
  console.log(password2);


  const handleSubmit = async e => {
    e.preventDefault()
    registerUser(email, username, password, password2)
  }

  return (
    <div className='bg-indigo-50 h-[100vh] w-[100%] flex items-center justify-center'>
      <div className='h-max w-[70%] border-2 p-3 border-white rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center'>
        <div className='grid lg:grid-cols-4 bg-slate-200 rounded-2xl h-[100%] w-[100%]'>
          <div className='col-span-2 h-full flex flex-col bg-white rounded-tl-2xl rounded-bl-2xl p-4'>
            <div className='flex flex-col gap-4  '>
              {/* logo */}
              {/* <Link to='/' className={`signup-logo h-[80px] w-[200px] object-cover object-center `}></Link> */}
              <div className='ml-4'>
                <h1 className='text-2xl flex gap-1'>Hi there, Welcome to <Link className='text-[#613ec4]' to='/'>Dev.Quiz !</Link></h1>
                <p className='text-sm'>Get started with your free account today.</p>
              </div>
            </div>
            <div className='mt-3 ml-4 grid gap-3'>
              <form onSubmit={handleSubmit}>
                <div className='grid items-start'>
                  <label htmlFor="Email" className='font-semibold text-lg'>Email</label>
                  <input name='email' onChange={e => setEmail(e.target.value)} className='signUp-inp' placeholder='name@gmail.com' type="email" />
                </div>
                <div className='grid items-start'>
                  <label htmlFor="username" className='font-semibold text-lg'>Username</label>
                  <input name='username' onChange={e => setUsername(e.target.value)} className='signUp-inp' placeholder='John Doe' type="text" />
                </div>
                <div className='grid items-start'>
                  <div className='flex items-center justify-between'>
                    <label htmlFor="Password" className='font-semibold text-lg'>Password</label>
                  </div>
                  <input name='password' onChange={e => setPassword(e.target.value)} className='signUp-inp' placeholder='*****************' type="password" />
                </div>
                <div className='grid items-start'>
                  <div className='flex items-center justify-between'>
                    <label htmlFor="Password" className='font-semibold text-lg'>Confirm Password</label>
                  </div>
                  <input name='password2' onChange={e => setPassword2(e.target.value)} className='signUp-inp' placeholder='*****************' type="password" />
                </div>
                <div className='grid items-start mt-4'>
                  <Button type='submit' variant='contained' className='w-full btn btn-contained' >create my free account</Button>
                </div>
              </form>
              <div className='flex items-center gap-2 justify-center'>
                <div className='b-line'></div>
                <p className='text-sm'>OR</p>
                <div className='b-line'></div>
              </div>
              <div className='grid items-start'>
                <Button variant='outlined' className='btn signUp-btn-outlined' > <img className='h-[20px]' src={googleLogo} alt="" /> Sign up with Google</Button>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <div className='flex items-center text-sm gap-2'>
                  <p className='font-light'>Already have an account ?</p>
                  <Link className='font-semibold underline' to='/login'>Login</Link>
                </div>
                <div className='flex items-center text-sm gap-2'>
                  <p>I agree to Dev.Quiz's</p>
                  <Link className='font-semibold underline' to='/terms'>Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>
          {/* svg */}
          <div className='col-span-2 signUp-svg lg:block hidden'></div>
        </div>
      </div>
    </div>
  )
}

export default Signup