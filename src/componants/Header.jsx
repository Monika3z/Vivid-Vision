import React, { useContext, useEffect, useState } from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { tokenAuthContext } from '../../context/TokenAuth';


function Header() {

  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthContext)
  const[logoutStatus,setLogOutStatus] = useState(false)
  const[loginStatus,setLogInStatus] = useState(true)
  useEffect(()=>{
   const token = sessionStorage.getItem("token")
    if (token) {
      setLogInStatus(false)
      setLogOutStatus(true)
    }
  },[])
  const userLogOut=()=>{
    sessionStorage.clear()
    setLogOutStatus(false)
    toast( "Oopss Logged out" ,{
      icon: '😢🥹',
    });
  setLogInStatus(true)
  setIsAuthorized(false)
  }
  
  return (
    <div>
     <Navbar id='header' style={{zIndex:2,width:'100%'}} expand="lg" className="bg position-fixed fw-bold">
     <Navbar.Brand>
           <img 
              alt=""
              src="https://i.postimg.cc/MGKw7tng/painting.png"
              width="55"
              height="40"
              className="d-inline-block align-top ms-4 "/>{' '}
      <Link to={'/'} style={{textDecoration:'none',fontSize:'30px',color:'beige'}}className=' fw-bold'>Vivid Visions</Link>
      </Navbar.Brand>
{ loginStatus&&     <Link style={{textDecoration:'none'}} to="/singup"> 
    <button id='vb' className='btn btn d-flex fw-bold'>Login</button>
    </Link>
}
    
{ logoutStatus&&  <button onClick={userLogOut} id='vb' className='btn btn d-flex fw-bold '>logout</button>}

        <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        </Container>
      </Navbar>
      <Toaster />
    </div>
  )
}

export default Header