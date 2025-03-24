

import './App.css'
import CardData from './components/CardData'
import CardGrid from './components/CardGrid'
import Navbar from './components/Navbar'
import StateBasics from './components/StateBasics'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<CardGrid/>}/>
        <Route path='/g' element={<CardData/>}/>
        <Route path='/c' element={<StateBasics/>}/>
      </Routes>
    </>
  )
}

export default App
