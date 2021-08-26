import './contact.scss';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    })
    
    const [sendMessage, setSendMessage] = useState(false)

    
    const handleChange = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName !== '' || formData.lastName !== '' || formData.email !== '') {
            setSendMessage(true)
        }
    }


    return (
        <div className='contact' id='contact'>
            <div className="container">
                <form onSubmit={handelSubmit}>
                    <input name='firstName' onChange={handleChange} defaultValue={formData.firstName} placeholder='First Name' type="text" />
                    <input name='lastName' onChange={handleChange} defaultValue={formData.lastName} placeholder='Last Name' type="text" />
                    <input name='email' onChange={handleChange} defaultValue={formData.email} placeholder='email' type="email" />
                    <textarea name="message" onChange={handleChange} defaultValue={formData.message} placeholder='Add a Message' type="text" />
                    {
                        sendMessage ? <span>Thank you for your message will get back as soon as possible</span> : null
                    }
                <button type='submit'>Send<SendIcon className='icon'/></button>
                </form>
            </div>
        </div>
    )
}

export default Contact
