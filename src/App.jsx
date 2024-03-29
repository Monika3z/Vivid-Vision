import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './componants/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Wallpages from './pages/Wallpages'
import Details from './pages/Details'
import 'bootstrap/dist/css/bootstrap.min.css';
import Singup from './pages/Singup'
import { useContext, useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Ours from './pages/Ours'
import { tokenAuthContext } from '../context/TokenAuth'


function App() {

  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthContext)
 
  useEffect(()=>{
  Aos.init({easing:"linear"})
  })

  return (
    <>

    <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/wallpages' element={ isAuthorized? <Wallpages></Wallpages>:<Home></Home>}></Route>
      <Route path='/details/:id' element={ isAuthorized? <Details></Details>:<Home></Home>}></Route> 
      <Route path='/singup' element={<Singup></Singup>}></Route>
      <Route path='/ours' element={<Ours></Ours>}></Route> 
      <Route path='/*' element={<Navigate to={'/'}/>}/> 

    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
