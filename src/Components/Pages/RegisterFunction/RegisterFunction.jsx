import './RegisterFunction.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const RegisterFunction = () => {

    const navigate = useNavigate()
    const APIurl = 'http://206.189.91.54/api/v1/auth'
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    });

    const { email, password, password_confirmation } = userInput

    const handleChangeEmail = (event) => {
        const { name, value } = event.target
        setUserInput({ ...userInput, [name]: value })
    }
    const handleChangePassword = (event) => {
        const { name, value } = event.target
        setUserInput({ ...userInput, [name]: value })
    }
    const handleChangeConfirmPassword = (event) => {
        const { name, value } = event.target
        setUserInput({ ...userInput, [name]: value })
    }

    const fetchRegisterAccount = async (userInput) => {
        const config = { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userInput) }
        const res = await fetch(`${APIurl}`, config)
        const data = await res.json()

        if(res.status === 200) {
            navigate('/')
        }
        console.log(res)
        console.log(data)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        fetchRegisterAccount(userInput)
    }

    return (
        <div className='register-container'>
            <form className='create-account-section' onSubmit={onSubmit}>

                <div className='title-section'>
                    <h1>Create a new account</h1>
                </div>

                <div className='inner-form-section'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='name@work-email.com'
                        value={email}
                        onChange={handleChangeEmail}
                    />

                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Your password'
                        value={password}
                        onChange={handleChangePassword}
                    />

                    <label>Confirm Password</label>
                    <input
                        type='password'
                        name='password_confirmation'
                        placeholder='Confirm Password'
                        value={password_confirmation}
                        onChange={handleChangeConfirmPassword}
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