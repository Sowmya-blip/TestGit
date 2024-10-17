import {useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  return (
    <div>
      <center>
        <h1>{count}</h1>/.
        <br/>
        <button onClick={()=>setCount(count+1)}>useState</button>
      </center>
    </div>
  )
}

export default App