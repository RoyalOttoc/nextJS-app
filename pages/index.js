import {useState}from 'react'

import Seo from '../components/Seo';

export default function Home(){
  const [number, setNumber] = useState(0);
  return (
    <div>
       <Seo title="Home"/>
      <h1>Hello World! {number}</h1>
    <button onClick={()=> setNumber(prev=>prev + 1)}>+</button>
    </div>
  )
}