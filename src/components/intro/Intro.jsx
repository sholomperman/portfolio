import { useEffect, useRef } from 'react'
import './intro.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'
import computer from '../../assets/computer.jpg';

const Intro = () => {
    const ref = useRef()

    useEffect(() => {
        init(ref.current, {
            showCursor: true,
            backDelay: 1000,
            strings: ['HTML', 'CSS/SCSS', 'JavaScrips', 'ReactJS']
        })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div>
                    <img className="pic" src={computer} alt="pic of laptop" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Hi There I'M</h2>
                <h1>sholom perman</h1>
                    <h3>Platforms <span ref={ref}></span></h3>
                <a href="#work">
                        <ExpandMoreIcon className='ExpandMoreIcon' />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
