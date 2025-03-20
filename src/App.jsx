import { useState } from 'react'
import './App.css'

import HeaderPageComponent from './components/HeaderPageComponent/HeaderPageComponent'
import InfoPageComponent from './components/InfoPageComponent/InfoPageComponent'
import FooterPageComponent from './components/FooterPageComponent/FooterPageComponent'

function App() {

  return (
    <div className='main__container'>
      <HeaderPageComponent/>
      <InfoPageComponent/>
      <FooterPageComponent/>
    </div>
  )
}

export default App
