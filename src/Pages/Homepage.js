import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
const Homepage = () => {

  const navigate = useNavigate();
  const [search, setSearch] = React.useState("")

  const handleChange = (event) => {
    const {value} = event.target
    setSearch(value.toLowerCase())
  }
  console.log(search)
  const enter = (event) =>{
    if(event.key === "Enter"){
      navigate(`./${search}`)
    }
  } 
  
  return (
    <>
    <Navbar/>
      <div className='text-center mx-20 my-40 '>
        <h1 className='text-8xl text-teal-50 font-bold '>CrypTracker</h1>
        <h1 className='text-3xl text-teal-50 my-10'>Your one stop for all the Cryptocurrency details.</h1>
      </div>
      <ParticleBackground/>
    </>
    
  )
}

export default Homepage
