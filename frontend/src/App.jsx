
import { useEffect } from 'react'
import './App.css'
import axios from "axios"
function App() {
 
  useEffect(()=>{
    getapi()
  },[])

  const getapi=async()=>{
     const {data}= await axios.get("https://full-stack-test1.vercel.app/api/product")
     console.log(data)
  }

  const getNoon=()=>{
    const {data}= await axios.get("")
  }

  return (
    <>
     <div>
         <h1>Front end</h1>
     </div>
    </>
  )
}

export default App
