import {React, useState} from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
// import Portfolio from './components/portfolio/Portfolio'
import Work from './components/work/Work'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './app.scss'

const App = () => {
    const [menu, setMenu] = useState(false)

  return (
    <>
    <div className="app">
      <Menu menu={menu} setMenu={setMenu}/>
      <Topbar menu={menu} setMenu={setMenu}/>
      <div className="sections">
        <Intro />
        {/* <Portfolio/> */}
        <Work/>
        {/* <Testimonials/> */}
        <Contact/>
      </div>
    </div>
    </>
  )
}

export default App
