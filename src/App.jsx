import { act, Fragment, use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name:"John", age:30});
  const [todos, setTodos] = useState(["React", "JavaScript"])

  const updateAge = () => {
    // Spread Operator (...)
    setUser(prevState => ({...prevState, age: prevState.age +1 }))
  }
  
  
  
  return (
   <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button className="border p-3 m-3" onClick={updateAge}>Update age</button>

      <p>Count: {count}</p>
      <button className="border p-3 m-3" onClick={() => setCount(count+1)}>เพิ่ม</button>
      <button className="border p-3 m-3" onClick={() => setCount(count-1)}>ลด</button>

      <hr />
      
      <h3 className='font-bold'>Todo list</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

   </div>
  )
}

export default App
