
import './App.css'
import OtherComponent from './Component/OtherComponent'
import useCounter from './store'

function App() {
  const {count, increment , decrement} =useCounter()

  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> */}
      <OtherComponent />
    </>
  )
}

export default App
