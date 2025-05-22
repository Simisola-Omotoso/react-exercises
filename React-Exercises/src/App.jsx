import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello';
import MessageDisplay from './MessageDisplay';
import Child from './Child';

function App() {
  const [count, setCount] = useState(0)

  function handleMessage(message) {
    console.log(message);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h1>My first React component.</h1>
      <Hello />
      <MessageDisplay />
      <Child
        message="I am a computer science student."
        onSend={handleMessage}
      />
    </>
  )
}

export default App