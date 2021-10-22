import { React, useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Menu from './components/menu/Menu';
import './app.scss';

const App = () => {
  const [menu, setMenu] = useState(false)
  const [onNoff, setOnNoff] = useState(false)

  
  return (
    <div className="app" >
        <Topbar
          menu={menu}
          setMenu={setMenu}
          onNoff={onNoff}
          setOnNoff={setOnNoff}
        />
        <Menu menu={menu}
          setMenu={setMenu}
        />
      <div className="sections"
            onClick={() => { setMenu(menu ? setMenu(false) : null); }}>
          <Intro
            onNoff={onNoff}
          />
          <Portfolio
            onNoff={onNoff}
          />
          <Contact
            onNoff={onNoff}
          />
      </div>
    </div>
  )
}

export default App
