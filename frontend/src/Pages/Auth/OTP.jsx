import React, { useEffect, useState } from 'react'

// images
import otp from '../../assets/Images/otp2.jpg'

import ClearIcon from '@mui/icons-material/Clear';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const OTP = () => {
  const [otpValues, setOTPValues] = useState(['', '', '', '']);
  const [lastFieldFilled, setLastFieldFilled] = useState(false);
  const [countDown, setCountDown] = useState(30)

  const handleInputChange = (e, index) => {
    const input = e.target.value.slice(0, 1);
    const newOTPValues = [...otpValues];
    newOTPValues[index] = input;
    setOTPValues(newOTPValues);

    if (index === 3) {
      const isLastFieldFilled = newOTPValues.every((value) => value.length === 1);
      setLastFieldFilled(isLastFieldFilled);

      if (isLastFieldFilled) {
        const enteredNumbers = newOTPValues.join('');
        alert(`OTP : ${enteredNumbers}`);
      }
    }

    if (index < 3 && input.length === 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countDown]);


  return (
    <div className='bg-indigo-50 h-[100vh] w-[100%] flex flex-col items-center justify-center'>
      <div className='h-max py-4 w-[400px] bg-white rounded-2xl p-2'>
        <div className='flex items-center justify-end'>
          <Link to='/signup'>
            <IconButton>
              <ClearIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <div className='otp-img h-[250px] w-[250px]'></div>
        </div>
        <div className='w-full flex flex-col text-center'>
          <h1 className='text-2xl'>Verify Your Email</h1>
          <p className='text-xs text-gray-400'>Enter 4 digit number sent to your registered email</p>
        </div>
        <div className='flex items-center justify-center gap-2 mt-4'>
          {otpValues.map((value, index) => (
            <input type="text" id={`otp-input-${index}`} className="otp-inp" key={index} value={value} onChange={(e) => handleInputChange(e, index)} maxLength={1} placeholder='*' />
          ))}
        </div>
      </div>
      <div className='w-full flex flex-col text-center mt-2 items-center justify-center'>
        <p className='text-sm flex gap-3'>Re-send code in { countDown == 0 ? <Link className='underline text-[#613ec4]' to='/signup'>resend OTP</Link> : <p>0 : {countDown}</p> } </p>
      </div>
    </div>
  )
}

export default OTP