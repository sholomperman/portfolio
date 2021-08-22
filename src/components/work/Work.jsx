import './work.scss'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import data from '../../dataWork';
import { useState } from 'react'

const Work = () => {
        
    const [slider, setSlider] = useState(0)
    const arrSize = data.length -1
    const styleArrow = {
        width: '60px',
        height: '60px',
    };
    const handelClick = (directions) => {
        directions === "left" ? setSlider(slider > 0 ? slider - 1 : arrSize) :
            setSlider(slider < data.length -1 ? slider + 1 : 0)
    }
    return (
        <div className='work'>
            <div className="slider" style={{transform: `translateX(${slider * -100}vw)`}}>
                {data.map((item) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="iconContainer">
                                        {item.icon}
                                    </div>
                                    <h1>{item.title}</h1>
                                    <p>{item.paragraph}</p>
                                    <span>Project</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="placeHolder"></div>
                            </div>
                        </div>
                    </div>
                        ))}
            </div>
            <ArrowBackIosRoundedIcon style={styleArrow} className='arrow left' onClick={() => { handelClick("left") }}/>
            <ArrowForwardIosRoundedIcon style={styleArrow} className='arrow right' onClick={handelClick}/>
        </div>
    )
}

export default Work
