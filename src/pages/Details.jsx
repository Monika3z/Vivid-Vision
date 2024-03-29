import React, { useEffect, useState } from 'react'
import './details.css'
import { Link, useParams } from 'react-router-dom'
import { getDetails } from '../services/allApi'
import SERVER_URL from '../services/serverUrl'
import rate from '../assets/imgFolder/icons8-star-64.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Confetti from 'react-confetti'
import toast, { Toaster } from 'react-hot-toast';




function Details() {

  const [isVisible, setIsVisible] = useState(false);
  const toggleConfetti = () => {
    handleClose()
    window.scrollTo(0, 0);
    setIsVisible(true); // Show confetti
    toast("Booking Successfully Completed", {
      icon: '🙌🥳',
    });

    setTimeout(() => setIsVisible(false), 4000); // Hide confetti after 5 seconds (adjust as needed)
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams();
  const [details,setDetails] = useState([])

  const detailsData = async()=>{
    try{
      const result = await getDetails(id)
      if(result.status===200){
        setDetails(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }
  console.log(details);
  useEffect(()=>{
    detailsData()
  },[])
  return (

  <>
<div>
<Link to={"/"}>
<div className='p-3 text-black homei'><i class="fa-solid fa-house-chimney fa-2xl"></i></div>
</Link>  

  <div className='container-fluid'>
  <div className='row '> 
  
 <div className='hea'>
 <h1 className='text-center mt-1'>What We Offer</h1> 
 </div>   
 {isVisible && <Confetti width={"1500px"}
  height={"1500px"} />}


<div className='col-lg-6 p-5'>
<div className='img-fluid'>
<img className='p-5 img2 shadow ' style={{height:"600px",width:'500px'}} src={`${SERVER_URL}/adminPhotos/${details?.images}`} alt="" />
</div>          
</div>
  
  <div className='col-lg-6 p-5'>
  <div className='mt-5'>
  <h2>{details?.title}</h2> 
  <hr />
  
  </div> 
  <div className='mt-4'>

  <p>{details?.description}</p>
  
  </div>  
  <div className='mt-4'>

  <p className='fw-bold fs-5 text-success'> Price : {details?.price}</p>
  </div>

<div>

<p className='fw-bold fs-5 text-success'>
  Rating :
  {[...Array(5)].map((_, index) => (
    <img
      key={index}
      className='mb-2'
      style={{ height: "20px", marginRight: "5px" }}
      src={rate}
      alt=""
    />
  ))}
</p>


<button onClick={handleShow} style={{backgroundColor:"black",color:"white"}}  className='btn d-flex mt-4'>Get Deal Now</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  style={{background:'beige'}} closeButton>
        <Modal.Title className='text-black'>For Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{background:'beige'}}>
        <FloatingLabel
        controlId="floatingInput" label="Name" className="mb-2">
        <Form.Control type="name" placeholder="Name" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingnumber" label="Phone" className='mb-2'>
        <Form.Control type="phone" placeholder="Phone number" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingaddress" label="Address" className='mb-2' >
        <Form.Control type="address" placeholder="Address" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingdate" label="Date" >
        <Form.Control type="date" placeholder="Date" />
        </FloatingLabel>


        </Modal.Body>
        <Modal.Footer  style={{background:'beige'}}>
          <Button style={{backgroundColor:"rgb(190, 34, 17)",color:"white"}} onClick={handleClose}>
          Cancel
          </Button>
          <Button style={{backgroundColor:" rgb(114, 75, 23)",color:"white"}} onClick={toggleConfetti}>
          Book
          </Button>
        </Modal.Footer>
      </Modal>


  </div>
  </div>
  </div>
  </div> 
  <Toaster />
 </div>

  </>
  )
}

export default Details 