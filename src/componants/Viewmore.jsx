import React from 'react'
import './viewmore.css'
import viewimg from '../assets/imgFolder/view1.jpg'
import viewimg1 from '../assets/imgFolder/view2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import homeimg1 from '../assets/imgFolder/homeblack.jpg'
import toast, { Toaster } from 'react-hot-toast';


function Viewmore() {

  const navigate =  useNavigate()
  const handleLogin=()=>{
    if(sessionStorage.getItem("token")){
      navigate("/wallpages")
    }else{
      toast.success('Login First !', {
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
      setTimeout(() => {
        navigate("/login")
      },2000);
    }
  }
  
  return (
    <div className='container-fluid'> 
    <div className='row'>
    <div className='col-lg-6 d-flex  justify-content-center'>

    <h1 data-aos="fade-right" data-aos-duration="500" className='p-2 mt-5'>Modern Interior Paintin Designs <hr /></h1>

<p className='p-4 mb-5 '>Need elegant textures or elaborate stencil designs? We have it all.
Get the latest designs based onyour unique taste and style. Revamp your interior decor with the experts.
we want to find designs you love as easy and exiting as possible
</p>
<div>

<button onClick={handleLogin} style={{backgroundColor:"black",color:"white"}} id='vm' className='btn w-25'>Find Your Style</button> 

</div>  
</div>
<div id='img'  className='col-lg-6 d-flex p-3'>

<img data-aos="fade-left" data-aos-duration="500" style={{height:'400px',borderRadius:'20px',marginTop:'25px',marginBottom:'25px'}} src={viewimg} alt="img not found" />
<img data-aos="fade-left" data-aos-duration="500" style={{height:'400px',borderRadius:'20px',marginTop:'25px',marginBottom:'25px'}} src={viewimg1} alt="img not found" />

</div>
</div>
<Toaster />
</div>
)
}

export default Viewmore