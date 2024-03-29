import React, { useState } from 'react'
import './singup.css'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../services/allApi'
import login1 from '../assets/imgFolder/login2.jpg'
import toast, { Toaster } from 'react-hot-toast';




function Singup() { 
  const navigate = useNavigate()
  const[userInputData,setUserInputData] = useState({
    username:"",email:"",password:"" 
  })
  const handleRegister = async (e)=>{
    e.preventDefault()
  // console.log(userInputData);
  const{username,email,password} = userInputData
  if(!username||!email||!password){
    // alert("please fill the form completely")
    toast.error("Please Fill The form Completly", {
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

  }else{
    try{
    const result = await registerAPI(userInputData) 
    console.log(result);
    if(result.status===200){ 
      // alert(`welcome ${result.data.username} please login to explore`)
      toast.success(`welcome ${result.data.username} please login to explore`, {
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



      setUserInputData({username:"",email:"",password:""})
    // Navigate to login
    setTimeout(() => {
      navigate("/login")

    },2000);
      // navigate("/login")
    }else{
      // alert(result.response.data) 
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
    <div className='signup'>
    <div style={{backgroundImage: `url(${login1})`,width:"550px"}} id='sc' className='card text-white'> 
    <div className='left text-black fw-bold'>
    <h2>-<br /> Vivid Visions <br />-</h2>
    <p className='text-balck'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita at dolor
    commodi sed pariatur rerum officiis eos illum, aliquid, ipsum labore 
    </p>
    <span className='fw-bold'>Have An Account?</span>
    <Link to='/login'>
    <button style={{backgroundColor:"black",color:"white"}} className='btn btn'>Login</button>
    </Link>
    </div>    
    <form className='right' > 

    <input type="text" required placeholder='username' value={userInputData.username} onChange={e=>setUserInputData({...userInputData,username:e.target.value})}/>  
    <input type="email" required placeholder='email' value={userInputData.email} onChange={e=>setUserInputData({...userInputData,email:e.target.value})} />  
    <input type="password" required placeholder='password'value={userInputData.password} onChange={e=>setUserInputData({...userInputData,password:e.target.value})} /> 
    <button onClick={handleRegister} style={{backgroundColor:"black",color:"white"}} type='submit'className='btn'>Register</button>  
 
    </form> 
    </div>
    <Toaster />
   </div>


  )
}

export default Singup 