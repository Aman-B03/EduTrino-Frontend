import React from 'react'
import Navbar from './Navbar'
// import logIn from "../assets/login.png"
// import { useForm } from 'react-hook-form'
// import { useState, useContext } from 'react'
// import axios from 'axios'
// import { userState } from '../context/context'
// import { Navigate, useNavigate } from 'react-router-dom'


const Login = () => {

  // const value = useContext(userState);
  // localStorage.setItem("userStatus", true)
  // const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  // const onSubmit = (data) => {
  //   axios.post('http://localhost:3000/signUp/login', data).then((response)=>{
  //     if(response.data.error){
  //       alert(response.data.error)
  //     }
  //     else{
  //       localStorage.setItem("token", response.data)
  //       value.setIsLogged(true)
  //       navigate('/dashboard')
  //     }
  //   })
  // }

  // const [checked, setchecked] = useState(false)

  // const handleChecked = (e) => {
  //   setchecked(e.target.checked)
  // }



  return (
    <div>
      <Navbar />
      <div className='flex flex-col gap-6 justify-center items-center w-[95vw] h-[95vh]'>
      <p className='text-4xl text-red-500 font-semibold'>BackEnd Under Deployement</p>
    <p className='font-2xl text-blue-500'>Sorry For Inconvinience</p>
    </div>
      {/* <div className="mainDabba flex lg:flex-row flex-col lg:gap-36 gap-10 " data-aos='fade-up'>
        <div className='textBox lg:w-[50%] w-3/4 h-[80vh] border-2 border-white mt-5  500:ml-20 mx-auto '>

          <h1 className="text-center text-3xl font-semibold my-5">Enter Your Email and Password</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isSubmitting && <div>Loading....</div>}
            <div className='flex flex-col gap-y-7  mt-14 items-center w-full'>

              <div className="email w-[90%]">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[gmail]+\.[com]{2,}$/,
                      message: "Invalid email address",
                    },
                    minLength: { value: 3, message: 'More than 3' }
                  })}
                  type="text"
                  placeholder='Gmail...'
                  className='border text-black border-slate-800 rounded-xl px-4 py-1 w-[100%]'
                />
                {errors.email && <div className='warning text-red-600'>{errors.email.message}</div>}
              </div>
              <div className="password w-[90%] text-black">
                <input
                  {...register("password", { required: true, minLength: { value: 5, message: 'More than 5' } })}
                  type={checked ? "text" : "password"}
                  placeholder='Password...'
                  className='border border-slate-800 rounded-xl px-4 py-1 w-[100%]'
                />
                {errors.password && <div className='warning text-red-600'>{errors.password.message}</div>}
              </div>
              <p>Show <input type="checkbox" onChange={handleChecked} /></p>
              <button  type='submit' disabled={isSubmitting} className="continue bg-black text-white mt-5  border w-[40%] px-3 py-2 rounded-xl getShadow">Log In</button>

            </div>
          </form>

        </div>
        <div className="image">
          <img src={logIn} alt="Log In" />
        </div>
      </div> */}
    </div>
  )
}

export default Login
