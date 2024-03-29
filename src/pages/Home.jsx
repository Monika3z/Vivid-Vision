import React from 'react'
import './home.css' 
import Viewmore from '../componants/Viewmore';
import Header from '../componants/Header'
import homeimg from '../assets/imgFolder/homeimgnew.jpg'
import homeimg1 from '../assets/imgFolder/homeblack.jpg'
import roller from '../assets/imgFolder/roller.png'
import tag from '../assets/imgFolder/tag.png'
import timing from '../assets/imgFolder/timing.png'
import workers from '../assets/imgFolder/workers.png'







function Home() {
  return (
  <>
    <Header></Header> 

   <div id='banner' > 

   <div >
   <div> 
    <div> 
      
        <img src={homeimg1} alt="" style={{width:'100%',height:"20%" }} />
       
        <div className='text-overlay'>
        <h1 className='fw-bold' style={{fontFamily:'fantacy'}} > CHOOSE YOUR WALLS </h1 >
       </div>

       <div className='text-overlay2'>
       <h5 className='fw-bold'>Hear The Walls Sound...</h5>
       </div>
       </div>

       <div   className='container-fluid home shadow'>  
       <div className='text-center p-3'><h3>Why You'll <i id='heart' class="fa-solid fa-heart"></i> Vivid Visions</h3></div>
       <div  style={{ fontSize: '90px' }}>
       </div>

         <div className='d-flex'>
         <div style={{ fontSize: '80px', }}  className='icon1' > <p className='fw-bold'><img className='mb-2' style={{height:"90px"}} src={roller} alt="" /></p> 

         <p id='p1'>Quality Paints</p></div>

         <div style={{ fontSize: '70px' }}  className='icon1' > <p className='fw-bold'><img className='mb-2' style={{height:"80px"}} src={timing} alt="" /></p> 

         <p id='p1'>Perfect Timing</p></div>

         <div style={{ fontSize: '60px' }}  className='icon1' > <p className='fw-bold'><img className='mb-2' style={{height:"60px"}} src={tag} alt="" /></p> 

         <p id='p1'>Genuine  Pricing</p></div>

         <div style={{ fontSize: '70px' }}  className='icon1' > <p className='fw-bold'><img className='mb-2' style={{height:"70px"}} src={workers} alt="" /></p> 

         <p id='p1'>Grate Workers</p></div>
      </div> 
      </div>
      </div>
      </div>
      <Viewmore></Viewmore>

   </div>
    </>
  )
}

export default Home