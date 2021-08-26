import './testimonials.scss'
import sholom from '../../assets/sholom.png'
import YouTube from '@material-ui/icons/YouTube';
import LinkedIn from '@material-ui/icons/LinkedIn';

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <YouTube className='icons'/>
                        <img src={sholom} alt="" />
                        <LinkedIn className='icons'/>
                    </div>
                    <div className="middle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium exercitationem qui nemo ipsum laborum molestia.
                    </div>
                    <div className="bottom">
                        <h3>sholom</h3>
                        <h4>unemployed</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
