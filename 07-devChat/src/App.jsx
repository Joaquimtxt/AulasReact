
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from 'react'
import Chat from './Pages/Chat'
import Join from './Pages/Join'
import Switch from './components/Switch/Switch'

function App() {
const[chatVisibility, setChatVisibility] = useState(false)
const [socket, setSocket] = useState(null)
const [isLight, setIsLight] = useState(false);
const troca = () => {
  setIsLight(!isLight);
};

  return (
<div id="App" className={`vh-100 d-flex flex-column justify-content-center align-items-center  ${isLight ? "bg-light text-dark" : "bg-dark text-light"}`}>
<div className="mb-3">
        <Switch troca={troca} isLight={isLight} />
      </div>
      <div>
        {chatVisibility ? (
          <Chat socket={socket} />
        ) : (
          <Join setSocket={setSocket} visibility={setChatVisibility} />
        )}
      </div>
</div>
  )
}

export default App
