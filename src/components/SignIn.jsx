import React from 'react'

const SignIn = () => {
  return (
    <div className='w-[400px] h-[400px] border-2 mx-auto my-10 bg-white'>
      <div className='m-5 p-5 justify-center'>
        <h1 className='mx-auto font-bold text-xl'>Sign In</h1>
        <input className='border-2' placeholder='Enter username'></input>
        <input className='border-2' placeholder='Enter password'></input>
        <button>Log In</button>
        <p><span>Don't have a account ? </span></p>
        <button>Sign Up</button>
        </div>
        </div>
  )
}

export default SignIn