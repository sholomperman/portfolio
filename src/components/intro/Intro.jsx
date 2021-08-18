import { useEffect, useRef } from 'react'
import './intro.scss'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { init } from 'ityped'

const Intro = () => {
    const ref = useRef()

    useEffect(() => {
        init(ref.current, {
            showCursor: false,
            backDelay: 1000,
            showCursor: true,
            strings: ['Develop', 'Designer', 'Content Creator']
        })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="pic">
                    <img src={require('../../assets/sholom.png').default} alt="pic of laptop" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Hi There I'M</h2>
                <h1>shalom perman</h1>
                    <h3>freelancer <span ref={ref}></span></h3>
                <a href="#portfolio">
                        <ExpandMoreIcon className='ExpandMoreIcon' />
                </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
