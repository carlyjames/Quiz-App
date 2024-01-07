import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components'
import AuthContext from '../../context/AuthContext'
import "../../App.css"

// auth
import useAxios from '../../Utils/UseAxios'
import jwtDecode from 'jwt-decode'


const Dashboard = () => {
  const [res, setRes] = useState('')
  const api = useAxios();
  const token = localStorage.getItem("authTokens")

  if(token){
    const decode = jwtDecode(token)
    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
    var email = decode.email
  }

  return (
    <div className='flex flex-col  h-[100vh] w-full z-20'>
      <Navbar />
      <section className='mt-16 lg:py-4  lg:px-16 px-6 gap-4 flex flex-col'>
        <h1 className='lg:text-3xl text-4xl z-20 '>{username}'s DASHBOARD</h1>
        {/* <h1 className='lg:text-3xl text-4xl z-20 '>{email}'s DASHBOARD</h1> */}
        <div className="grid lg:grid-cols-3 gap-6">

          <Link className="container-card w-full h-full rounded-2xl ">
            <div className='shadow-black h-full w-full  bg-1 border-4 border-green-300 rounded-2xl flex flex-col items-center justify-center text-white'>
              <h1 className='text-2xl'>Points</h1>
              <p>0</p>
            </div>
          </Link>
          
          <Link to='/profile' className="container-card  w-full h-full rounded-2xl">
            <div className='h-full w-full  bg-2 border-4 border-green-300 rounded-2xl flex flex-col items-center justify-center text-white'>
              <h1 className='text-2xl'>Profile</h1>
              <small>Edit or view profile</small>
            </div>
          </Link>
          <Link className="container-card  w-full h-full rounded-2xl">
            <div className='h-full w-full  bg-3 border-4 border-green-300 rounded-2xl flex flex-col items-center justify-center text-white'>
              <h1 className='text-2xl'>Start Quiz</h1>
              <small>Start an instant quiz</small>
            </div>
          </Link>
          <Link className="container-card  w-full h-full rounded-2xl">
            <div className='h-full w-full  bg-4 border-4 border-green-300 rounded-2xl flex flex-col items-center justify-center text-white'>
              <h1 className='text-2xl'>Recommended Tutorials</h1>
              <small>Recommended tutorials to sharpen your learning</small>
            </div>
          </Link>
          <Link className="container-card  w-full h-full rounded-2xl">
            <div className='h-full w-full  bg-5 border-4 border-green-300 rounded-2xl flex flex-col items-center justify-center text-white'>
              <h1 className='text-2xl'>Performance</h1>
              <small>Your performance so far</small>
            </div>
          </Link>
          <Link className="container-card  w-full h-full rounded-2xl">
            <div className='h-full w-full  bg-6 border-4 border-green-300 rounded-2xl flex flex-col items-center justify-center text-white'>
              <h1 className='text-2xl'>Events</h1>
              <small>Upcoming or latest events</small>
            </div>
          </Link>


        </div>
      </section>
    </div>
  )
}

export default Dashboard