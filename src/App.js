import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/intro'
import Portfolio from './components/portfolio/Portfolio'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contact/Contact'
import { useState } from 'react'
import './App.scss'

function App() {
  const [menuopen, setMenuOpen] = useState(false)
  return (
    <div className='app'>
      <Topbar menuopen={menuopen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contacts />
      </div>
    </div>
  )
}

export default App
