import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components'
import "../../App.css"

// auth
import useAxios from '../../Utils/UseAxios'
import jwtDecode from 'jwt-decode'

// images
import cover from './Images/ProfileCover.jpg'
import { Button } from '@mui/material'


const Profile = () => {
    const [res, setRes] = useState('')
    const api = useAxios();
    const token = localStorage.getItem("authTokens")

    if (token) {
        const decode = jwtDecode(token)
        var user_id = decode.user_id
        var username = decode.username
        var email = decode.email
        var full_name = decode.full_name
        var image = decode.image
        var country = decode.country
    }
    return (
        <div className='flex flex-col  h-[100vh] w-full z-20'>
            <Navbar />
            <section className='mt-12 lg:py-4   gap-4 flex flex-col'>
                <div className='banner'>
                    <div className=' mx-8 h-[200px]'></div>
                    <div className='flex mx-12 transform -translate-y-[150px] items-center'>
                        {/* <img  src='https://www.w3schools.com/howto/img_avatar2.png' className=' rounded-xl h-[200px]' alt={username} /> */}
                        <div className='flex items-center justify-between w-full'>
                            <div className='flex flex-col mx-4 mt-24'>
                                <h1 className='text-2xl'>{username}</h1>
                                <h1>{email}</h1>
                                <h1>{country}</h1>
                            </div>
                            <button className='profile-btn float-right mt-24 r-0'>Edit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile