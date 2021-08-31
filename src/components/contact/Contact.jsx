import './contact.scss';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const Contact = () => {


    return (
        <div className='contact' id='contact'>
            <div className="container">
                    <h1>Sholom Perman.</h1>
                    <ul>
                        <li>Birthday: February 10 2002</li>
                        <li>Birthplace: Santiago Chile Age: 19</li>
                        <li>Height: 5’8"</li>
                        <li>Parents: Menashe and Chaya Perman,</li>
                    </ul>
                    <h2>Education:</h2>
                    <ul>
                        <li>Elementary: Ohole Torah</li>
                        <li>High School: New Haven and boarding school Israel</li>
                        <li>I learned web development in a trending school in California</li>
                    </ul>
                    <h2>skilled Languages:</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS/SASS</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                    </ul>
                    <h2>Fluent in:</h2>
                    <ul>
                        <li>English</li>
                        <li>Spanish</li>
                        <li>Yiddish</li>
                        <li>Hebrew</li>
                    </ul>
                    <h1>BRIEF DESCRIPTION:</h1>
                    <ul>
                        <li>Sholom is easy going, intelligent, friendly, respectful with his coworkers, and superiors.</li>
                    </ul>
            </div>
            <div className="contactContainer">
                    <h1 className='contact'>Contact</h1>
                        <a className='iconAnchor' href="mailto:sholomperman@gmail.com"><EmailIcon className='icon' />
                        <p>sholomperman@gmail.com</p>
                        </a>
                        <a className='iconAnchor' href="tel:347-378-9160"><PhoneIcon className='icon' />
                        <p>+1 347-378-9160</p>
                        </a>
                        <a className='iconAnchor' href="https://github.com/sholomperman"><GitHubIcon className='icon' />
                        <p>My GitHub</p>
                        </a>
                        <a className='iconAnchor' href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><LinkedInIcon className='icon' />
                        <p> My Linkedin</p>
                        </a>
            </div>
        </div>
    )
}

export default Contact
