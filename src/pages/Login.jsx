import React, { useContext, useState } from 'react'
import './login.css' 
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI } from '../services/allApi'
import login1 from '../assets/imgFolder/login2.jpg'
import toast, { Toaster } from 'react-hot-toast';
import { tokenAuthContext } from '../../context/TokenAuth'



function Login() {

  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthContext)

  const navigate = useNavigate()
  const [welcomeName,setWelcomeName] = useState("")
  const[userInputData,setUserInputData] = useState({
  username:"", email:"",password:""  
  }) 

  const handleLogin = async (e)=>{ 
  e.preventDefault()
  console.log(userInputData);
  const{email,password} = userInputData 
  if(!email||!password){
  }else{
    try{
    const result = await loginAPI({email,password}) 
    console.log(result);
    if(result.status===200){ 
      // store token , username
    sessionStorage.setItem("username",result.data.existingUser.username) 
    sessionStorage.setItem("token",result.data.token) 

      setUserInputData({email:"",password:""})
      const user = sessionStorage.getItem("username")
      setWelcomeName(user)
      setIsAuthorized(true)
      toast(`Welcome ${user} ! `, {
        icon: '🐳💕👾',
      });
    // Navigate to wallpages
    setTimeout(() => {
      navigate("/wallpages") 
    }, 2000);
      // navigate("/wallpages") 
    }else{
      // alert(result.response.data) 
      // toast.info((result.response.data)) 
      toast.success((result.response.data), {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: 'black',
        },
        iconTheme: {
          primary: 'black',
          secondary: '#FFFAEE',
        },
      });

    }
    }catch(err){
    console.log(err);
    }
   }
  }


  return (
    <div >
   <div className='login'> 
    <div style={{backgroundImage:`url(${login1})`,width:"550px"}} id='cb' className='card m-5 p-5 text-white'>
      
    <div className='left text-black fw-bold'>
    <h2>-<br />Vivid Visions <br />-</h2>
    <p >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at dolor
    commodi sed pariatur rerum officiis eos illum, aliquid, ipsum labore 
    </p>
    <span className='fw-bold'>Don't Have An Account?</span> 
    <Link to='/singup'>
    <button style={{backgroundColor:"black",color:"white"}} className='btn btn'>Register</button>
    </Link>
    </div>    
    <form className='right'>
    <input type="email" required placeholder='Email' value={userInputData.email} onChange={e=>setUserInputData({...userInputData,email:e.target.value})} />  
    <input type="password" required placeholder='Password' value={userInputData.password} onChange={e=>setUserInputData({...userInputData,password:e.target.value})} />
    <button onClick={handleLogin} style={{backgroundColor:"black",color:"white"}} type='submit'className='btn'>Login</button>  
 
    </form> 
    </div>
   </div>
   <Toaster />
    </div>  
  )
}

export default Login