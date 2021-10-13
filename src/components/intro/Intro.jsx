import { useEffect, useRef } from 'react'
import './intro.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';
import {bgBlack, bgWight, wight, black} from '../../globalStyles'

const Intro = ({ onNoff }) => {
    const ref = useRef()

    useEffect(() => {
        init(ref.current, {
            showCursor: true,
            backDelay: 1000,
            strings: ['HTML', 'CSS/SASS', 'JavaScript', 'ReactJS']
        })
    }, []);

    
    const colorChange = () => {
    let result;
    if (onNoff  === true) {
        result = wight
    } else {
        result = black
    }
    return result
    }
    return (
        <div style={onNoff ? bgBlack : bgWight} className='intro' id='intro'>
            <div className="container">
                <div className="wrapper">
                <h2 style={colorChange()}>Hi There I'M</h2>
                <h1 style={colorChange()}>Sholom Perman</h1>
                    <h3 style={colorChange()}>Platforms <span ref={ref}></span></h3>
                </div>
            </div>
                <a className='arrowIntro' href="#portfolio">
                        <ExpandMoreIcon style={colorChange()}className='ExpandMoreIcon' />
                </a>
        </div>
    )
}

export default Intro
