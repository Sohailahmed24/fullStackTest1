
import { useEffect } from 'react'
import './App.css'
import axios from "axios"
function App() {
 
  useEffect(()=>{
    getapi()
  },[])

  const getapi=async()=>{
     const {data}= await axios.get("http://localhost:8080/api/product")
     console.log(data)
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
