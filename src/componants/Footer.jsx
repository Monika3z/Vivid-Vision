import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
      <div id='footer'>
      <div className='container mt-5 m-5'>
       <div className='row '>
        <div className='col-lg-4 '>
        <h4 className='mt-4'>
         <img style={{marginRight:'10px'}}
              alt=""
              src="https://i.postimg.cc/MGKw7tng/painting.png"
              width="40"
              height="30"
              className="d-inline-block align-top me-1"/>Vivid Visions</h4>
              <hr />
              <p className='text-secondary'>Sign up to receive email updates on new product announcements, new launches and more...</p>
        
        </div>
        <div className='col-lg-4 '>
        <h4 className='mt-4  fs-6 mb-3 '>ABOUT US</h4>
        <p className='text-secondary'>We aim to give more alternatives in the wall panel domain to assist the architects, and interior designers attain what they need.</p>
        </div>
        {/* <div className='col-lg-2 '>
        <h4 className='mt-4 fs-6 mb-3 ms-2'> LINKS </h4> 

<li >Bootstrap</li>
<li >Route</li>
<li >React</li>
</div> */}
        <div className='col-lg-4'> 
        <h5 className='mt-4 fs-6 mb-3  text-center'>CONTACT US</h5>
        <input className='form-control mx-auto d-block w-50 text-center' placeholder='Enter your email' type="email" />
        <button id='sendb' className='mt-2 fw-bold text-center mx-auto d-block btn btn'>Send</button>
        </div>
        <div className='text-center m-3 text-secondary'>©2024 Vivid Visions.All right reserved @Monika </div>

       </div>
      </div>
    </div>

    </>
  )
}

export default Footer