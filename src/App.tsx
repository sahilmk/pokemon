import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loginpage, PokemonListing, Registerpage } from './Pages'
import './Styles/main.scss'

function App() {
  const localData = localStorage.getItem("login");
  const [loginState, setLoginState] = useState(localData === "true" ? true : false);

  return (
    <>
      <Routes>
        {loginState ?
          <>
            <Route path='/' element={<PokemonListing />} />
          </>
          :
          <>
            <Route path='/' element={<Loginpage loginState={loginState} setLoginState={setLoginState} />} />
            <Route path='/register' element={<Registerpage />} />
          </>
        }

      </Routes>
    </>
  )
}

export default App
