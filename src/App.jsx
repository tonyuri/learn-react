import { act, Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Components
import Greeting from './components/Greeting.jsx'
import Card from './components/Card.jsx'
import Layout from './components/Layout.jsx'
import Userlist from './components/UserList.jsx'
import Categories from './components/Categories.jsx'

function App() {
  const [bgColor, setBgColor] = useState('Lightgrey')
  const position = "Front-end Developer"
  const items = ["Apple", "Banan", "Orange"]

  const handleClick = (name) => {
    alert(`Hello, ${name}`)
  }

  const handleChange = (event) => {
    console.log("Input value:", event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    alert("Form submitted")
  }

  const handleMouseEnter = () => setBgColor('Lightblue')
  const handleMouseLeave = () => setBgColor('Lightgrey')

  const handleKeyDown = (event) => console.log("Key pressed:", event.key)
  

  return (
    <Layout>
      {/* Child components */}
      <Greeting name="John" age={30} position={position} isLoggedIn={true} hasMessage={true}/>
      <Card title="ReactJS">
        <p>Learn ReactJS for beginners</p>
      </Card>
      <Userlist />
      <Categories />
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
        <button type="submit">Click me</button>
      </form>
      <div 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        style={{padding: "20px", backgroundColor: bgColor, transition: "0.3s"}}
      >
        Hover over me!
      </div>
      <input type="text" onKeyDown={handleKeyDown} onFocus={() => console.log('Input focused')} onBlur={() => console.log('Input blurred')}/>
      <div style={{backgroundColor: "yellow", padding: "20px", borderRadius: "10px"}}>
        Inline CSS
      </div>
    </Layout>
  )
}

export default App
