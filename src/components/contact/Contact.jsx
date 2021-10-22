import './contact.scss';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {  wight, bgWight, bgBlack, black } from '../../globalStyles';



const Contact = ({onNoff}) => {

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
        <div className="contactContainer" style={onNoff ? bgBlack : bgWight}>
            <div className="top">
                <div className="topLeft">
                    <p className="name" style={colorChange()}>Sholom Perman</p>
                    <div className="ulContainer">
                        <p className="title">SKILLS</p>
                        <ul>
                            <li className="txt" style={colorChange()}>HTML.</li>
                            <li className="txt" style={colorChange()}>CSS.</li>
                            <li className="txt" style={colorChange()}>JavaScript.</li>
                            <li className="txt" style={colorChange()}>reactJS.</li>
                        </ul>
                    </div>
                    <div className="ulContainer">
                        <p className="title">LANGUAGES</p>
                        <ul>
                            <li className="txt" style={colorChange()}>English.</li>
                            <li className="txt" style={colorChange()}>Spanish.</li>
                            <li className="txt" style={colorChange()}>Yiddish.</li>
                            <li className="txt" style={colorChange()}>Hebrew.</li>
                        </ul>
                    </div>
                </div>
                <div className="topRight">
                    <h1 className='education'>EDUCATION</h1>
                    <div className="item">
                        <p className="boldTxt" style={colorChange()}>Jewish Education Trade School,</p>
                        <p className="location" style={colorChange()}>Los Angeles —Computer Science & Rabbinical Studies</p>
                        <p className="dates" style={colorChange()}>October 2020 - June 2021</p>
                    </div>
                        <div className="item">
                        <p className="boldTxt" style={colorChange()}>High School,</p>
                        <p className="location" style={colorChange()}>New Haven</p>
                        <p className="dates" style={colorChange()}>September 2019 - June 2020</p>
                    </div>
                        <div className="item">
                        <p className="boldTxt" style={colorChange()}>High School,</p>
                        <p className="location" style={colorChange()}>Israel</p>
                        <p className="dates" style={colorChange()}>September 2016 - June 2019</p>
                    </div>
                        <div className="item">
                        <p className="boldTxt" style={colorChange()}>Elementary, </p>
                        <p className="location" style={colorChange()}>Brooklyn NY</p>
                        <p className="dates"style={colorChange()}>September 2013 - June 2016</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <a href="https://github.com/sholomperman">
                    <GitHubIcon
                        style={colorChange()}
                        className='iconContent'
                    />
                </a>
                <a href="https://www.linkedin.com/in/sholom-perman">
                    <LinkedInIcon 
                        style={colorChange()}
                        className='iconContent'
                    />
                </a>
                <a href="tel:347-378-9160">
                    <PhoneIcon
                        style={colorChange()}
                        className='iconContent'
                    />
                </a>
                <a href="mailto:sholomperman@gmail.com">
                    <EmailIcon
                        style={colorChange()}
                        className='iconContent'
                    />
                </a>
            </div>
        </div>
    )
}

export default Contact
