import './topbar.scss';
import { mainColor, bgMainColor, bgSecondary, wight, bgWight, bgBlack } from '../../globalStyles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const Topbar = ({ menu, onNoff, setMenu, setOnNoff }) => {


    return (
        <div style={onNoff || menu ? bgMainColor : bgWight} className={'topbar ' + (menu && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a style={onNoff || menu ? wight : mainColor} onClick={() => { setMenu(menu ? false : null); }} href="#intro" className='logo'>S.P Dev</a>
                </div>
                <div className="right">
                    <div className={'switch ' + (onNoff && 'activeSwitch')} onClick={() => { onNoff ? setOnNoff(false) : setOnNoff(true)}}>
                        <div style={onNoff ? bgWight : bgBlack} className="circle">{onNoff ? <WbSunnyIcon className='sun'
                        /> : <NightsStayIcon className='moon' />}</div>
                    </div>
                    <div className='hamburger' onClick={()=>{setMenu(!menu)}}>
                        <span style={onNoff || menu ? bgSecondary : bgMainColor} className="line1"></span>
                        <span style={onNoff || menu ? bgSecondary : bgMainColor} className="line2"></span>
                        <span style={onNoff || menu ? bgSecondary : bgMainColor} className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Topbar
