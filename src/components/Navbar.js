import React from 'react'
import {useNavigate} from "react-router-dom"
import logo from "../images/logo.png"
const Navbar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = React.useState("")

    const handleChange = (event) => {
        const {value} = event.target
        setSearch(value.toLowerCase())
    }
    const enter = (event) =>{
        if(event.key === "Enter"){
        navigate(`../${search}`)
        }
    }
    
  return (
    <nav class="flex justify-between px-20 py-5 items-center">
        <img src = {logo} className="h-12 w-12 cursor-pointer" onClick={() => navigate('/')}/>
        <div class="flex items-center">
            <div class="flex items-center">
            
            <input type="text" class="text-white rounded-md border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-2 mx-4 bg-gray-800 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 " placeholder="Search"
                    onChange={handleChange} onKeyDown={enter} value={search}
                />
            </div>
            <ul class="flex items-center space-x-6">
            <li class="font-semibold text-white cursor-pointer" onClick={() => navigate('/popular')}>Trending</li>
            <li class="font-semibold text-white cursor-pointer" onClick={() => navigate('/news')}>News</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar

//<h1 class="text-3xl text-white font-bold cursor-pointer" onClick={() => navigate('/')}>CrypTracker</h1>