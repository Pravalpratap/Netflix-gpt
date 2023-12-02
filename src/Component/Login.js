import React,{useState} from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInform,setIsSignInform]=useState(true);
  const Toggleform=()=>{
    setIsSignInform(!isSignInform)
  }
  return (
    <>
      <Header/>
      <div>
        <img className='absolute'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded opacity-80">
           <h1 className='font-bold text-2xl py-4'>{isSignInform?"SignIn":"Signup"}</h1>
           {!isSignInform &&  <input type="text" placeholder="Full Name" className='w-full p-4 my-4 bg-gray-700 '/> }
          <input type="text" placeholder="Email" className='w-full p-4 my-4 bg-gray-700 '/>
          <input type="text" placeholder="password" className='w-full p-4 my-4 bg-gray-700'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInform?"SignIn":"Signup"}</button>
          <p className='py-4 cursor-pointer' onClick={Toggleform}>{isSignInform?"New to Netflix ?sign up now":"Already registered?SignIn now.."}</p>

          
        </form>
    </>
  )
}

export default Login
