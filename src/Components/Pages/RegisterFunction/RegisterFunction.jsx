import './RegisterFunction.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import  HandleChange  from '../../../utils/HandleChange';
import logo from '../../../assets/images/slack-logo.svg'
import FetchUtils from '../../../utils/FetchUtils';

const RegisterFunction = () => {

    const navigate = useNavigate()
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    });

    const { email, password, password_confirmation } = userInput


    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await FetchUtils('/auth/', 'POST', userInput)
        if(!data) {
            console.log('something wrong')
            return
        }else {
            navigate('/')
        }
        
    }

    return (
        <div className='register-container'>
            <form className='create-account-section' onSubmit={onSubmit}>

                <div className='title-section'>
                <img src={logo} /><p>slack</p>
                    <h1>Create a new account</h1>
                </div>

                <div className='inner-form-section'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='name@work-email.com'
                        value={email}
                        onChange={(e) => HandleChange(e, setUserInput)}
                    />

                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Your password'
                        value={password}
                        onChange={(e) => HandleChange(e, setUserInput)}
                    />

                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='password_confirmation'
                        placeholder='Confirm Password'
                        value={password_confirmation}
                        onChange={(e) => HandleChange(e, setUserInput)}
                    />

                    <button>Sign Up</button>
                </div>


                <div className='navigate-login-section'>
                    <p>Already have an account? <span onClick={() => { navigate('/') }}>Sign in</span></p>
                </div>
            </form>

        </div>
    )
}

export default RegisterFunction