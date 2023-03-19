import { useState } from 'react'
import './App.css'
import Button from '../Components/Button'
import Profile from '../Components/Profile'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('run')
  const [ifTrue, setTrue] = useState(true)

  const user ={
    fName: "Joel",
    lName: "Den",
    imgPic: "https://source.unsplash.com/random"
  }

  const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

  function handleInClick() {
    setCount(count + 1)
  }
  function handleDeClick() {
    setCount(count - 1)
  }

  return (
    //React Fragments
    <>
    <h1> Welcome to my app</h1>
    <Profile data={user} />
    <p>{count}</p>
    <button onClick={handleInClick}>Increase</button>
    <button onClick={handleDeClick}>Decrease</button>
      <Button/>
    <p>{ifTrue ? "Yes" : "No"}</p>
    <ul>
      {products.map(item =>(
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
    </>
  )
}

export default App
