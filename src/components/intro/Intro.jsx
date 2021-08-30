import { useEffect, useRef } from 'react'
import './intro.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped';

const Intro = () => {
    const ref = useRef()

    useEffect(() => {
        init(ref.current, {
            showCursor: true,
            backDelay: 1000,
            strings: ['HTML', 'CSS/SASS', 'JavaScrips', 'ReactJS']
        })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="container">
                <div className="wrapper">
                <h2>Hi There I'M</h2>
                <h1>Sholom Perman</h1>
                    <h3>Platforms <span ref={ref}></span></h3>
                </div>
            </div>
                <a className='arrowIntro' href="#portfolio">
                        <ExpandMoreIcon className='ExpandMoreIcon' />
                </a>
        </div>
    )
}

export default Intro
