import './contactOld.scss';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {  wight, bgWight, bgBlack, black } from '../../globalStyles';

const ContactOld = ({onNoff}) => {

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
        <div style={onNoff ? bgBlack : bgWight} className='contact' id='contact'>
            <div className="container">
                    <h1 style={colorChange()}>Sholom Perman.</h1>
                    <h2 style={colorChange()}>Education:</h2>
                    <ul>
                        <li style={colorChange()}>Elementary: Ohole Torah</li>
                        <li style={colorChange()}>High School: New Haven and boarding school Israel</li>
                        <li style={colorChange()}>Web Development: Jewish Education Trade School</li>
                    </ul>
                    <h2 style={colorChange()}>skilled Languages:</h2>
                    <ul>
                        <li style={colorChange()}>HTML</li>
                        <li style={colorChange()}>CSS/SASS</li>
                        <li style={colorChange()}>JavaScript</li>
                        <li style={colorChange()}>ReactJS</li>
                    </ul>
                    <h2 style={colorChange()}>Fluent in:</h2>
                    <ul>
                        <li style={colorChange()}>English</li>
                        <li style={colorChange()}>Spanish</li>
                        <li style={colorChange()}>Yiddish</li>
                        <li style={colorChange()}>Hebrew</li>
                    </ul>
                    <h1 style={colorChange()}>BRIEF DESCRIPTION:</h1>
                    <ul>
                        <li style={colorChange()}>Sholom is easy going, intelligent, friendly, respectful with his coworkers, and superiors.</li>
                    </ul>
            </div>
            <div className="contactContainer">
                    <h1 style={colorChange()} className='contact'>Contact</h1>
                        <a className='iconAnchor' href="mailto:sholomperman@gmail.com"><EmailIcon style={colorChange()} className='icon' />
                        <p style={colorChange()}>sholomperman@gmail.com</p>
                        </a>
                        <a className='iconAnchor' href="tel:347-378-9160"><PhoneIcon style={colorChange()} className='icon' />
                        <p style={colorChange()}>+1 347-378-9160</p>
                        </a>
                        <a className='iconAnchor' href="https://github.com/sholomperman"><GitHubIcon style={colorChange()} className='icon' />
                        <p style={colorChange()}>My GitHub</p>
                        </a>
                        <a className='iconAnchor' href="https://www.linkedin.com/in/sholom-perman"><LinkedInIcon style={colorChange()} className='icon' />
                        <p style={colorChange()}>My Linkedin</p>
                        </a>
            </div>
        </div>
    )
}

export default ContactOld
