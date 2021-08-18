import './topbar.scss'
import { Person, Mail } from '@material-ui/icons'

const Topbar = ({ menu, setMenu }) => {
    return (
        <div className={'topbar ' + (menu && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>btn</a>
                    <div className="itemContainer">
                        <Person className='icons'/>
                        <span>+1 347 378 9160</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icons'/>
                    <span>sholomperman@gmail.com</span>
                    </div>
                    
                </div>
                <div className="right">
                    <div className='hamburger' onClick={()=>{setMenu(!menu)}}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
