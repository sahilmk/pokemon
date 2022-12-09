import { useState } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { Loginpage, PokemonDetail, PokemonListing, Registerpage } from './Pages'
import './Styles/main.scss'

function App() {
  const localData = localStorage.getItem("login");
  const [loginState, setLoginState] = useState(localData === "true" ? true : false);


  return (
    <>
      <Routes>
        {loginState ?
          <>
            <Route path='/' element={<PokemonListing loginState={loginState} setLoginState={setLoginState} />} />
            <Route path={`/pokemondetail/:name`} element={<PokemonDetail />} />

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
