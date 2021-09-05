import {React, useState} from 'react'
import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import './app.scss'

const App = () => {
    const [menu, setMenu] = useState(false)

  return (
    <>
      <Topbar menu={menu} setMenu={setMenu}/>
        <div className="app" onClick={() => { setMenu(menu ? setMenu(false) : null); }}>
      <Menu menu={menu} setMenu={setMenu}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Contact />
      </div>
    </div>
    </>
  )
}

export default App
