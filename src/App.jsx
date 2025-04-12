import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)


const handlechange = () =>{
  setCount(oldCount => oldCount +1);

}

  useEffect(() =>{
    console.log("Test");
  },[count]);

  return (
    <>
    <p>Katzen sind 🐈🐈‍⬛</p>
    <button onClick={handlechange}>Katzencounter: {count}</button>
    </>
  )
}

export default App
