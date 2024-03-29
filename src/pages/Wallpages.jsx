import React, { useEffect } from 'react'
import './wallpages.css'
import { useState } from 'react'
import { getWallData } from '../services/allApi'
import { Link } from 'react-router-dom'
import SERVER_URL from '../services/serverUrl'



function Wallpages() {

  const [searchkey,setSearchKey]= useState("")
  const [allImages,setAllImages] = useState([])
  const showData = async()=>{
    try{
      const result = await getWallData(searchkey)
      if(result.status===200){
        setAllImages(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  console.log(allImages);
  useEffect(()=>{
    showData()
    window.scrollTo(0, 0);
  },[searchkey])
console.log(searchkey);
  return (
    <>


<div className='effect'>
<Link to={"/"}>
<div className='p-3 text-black'><i class="fa-solid fa-house-chimney fa-2xl"></i></div>
</Link>  
  <div style={{marginTop:"220px"}} className='sidebar position-fixed'>  
  <a href="https://github.com/Monika3z" >
  <div className='text-black shadow p-2 fs-3'style={{ marginRight:'5px', fontSize: '1rem',backgroundColor:"burlywood"}}><i class="fab fa-github-square"></i></div>
  </a>  
  <a href='https://in.pinterest.com/monikamonixx/'>
  <div className='text-black shadow p-2 fs-3'style={{ marginRight: '5px', fontSize: '1rem',backgroundColor:"burlywood" }}><i class="fa-brands fa-pinterest"></i></div>
  </a>

  <a href='https://www.linkedin.com/in/monika-m-189958291/'>
  <div className='text-black shadow p-2 fs-3'style={{ marginRight: '5px', fontSize: '1rem',backgroundColor:"burlywood" }}><i class="fa-brands fa-linkedin"></i></div>
  </a> 
  <div className='text-black shadow p-1 fs-3'style={{ marginRight: '5px', fontSize: '1rem',backgroundColor:"burlywood" }}><i class="fa-solid fa-link"></i></div>

  <a href='mailto:monikamonix9@gmail.com'>
  <div className='text-black shadow p-2 fs-3'style={{ marginRight: '5px', fontSize: '1rem',backgroundColor:"burlywood" }}><i class="fa-solid fa-envelope"></i></div>
  </a>
  </div>

    <div className="container">
    <h1 className=' p-2 text-center'>Explore Walls</h1>  <hr />

<div className='text-end'>
<input className='search text-center' onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search...' /> 
</div>   
{ allImages.length===0? (
  <div className='p-5  text-center'><h3>No Matches Found...💔</h3></div>
):(
<div className="row ">
{      allImages.length>0 && allImages.map((wallpage,index)=>( <div key={index} id="div1" data-aos="fade-down" data-aos-duration="500" className="img1 col-md-3 col-sm-12 border shadow rounded m-5 " > 
        <Link to={`/details/${wallpage?.wallid}`} style={{textDecoration:'none'}}>
        <img style={{height:"350px",width:'300px'}} src={`${SERVER_URL}/adminPhotos/${wallpage?.images}`} alt="Image 1" className="img-fluid" /></Link>
        <h4 className='text-center m-4'>{wallpage?.title}</h4>
        </div>
))    
}
  </div>)
}   </div>
    </div>
    </>
  
  )
}

export default Wallpages 