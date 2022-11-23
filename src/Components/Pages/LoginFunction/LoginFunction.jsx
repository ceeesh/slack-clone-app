import { useState, useContext } from 'react'
import { UserContext } from '../../../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/slack-logo.svg'
import './LoginFunction.css'
import HandleChange from '../../../utils/HandleChange';

const LoginFunction = () => {
    const navigate = useNavigate()
    const { loginInfo, setLoginInfo, loginInfoHeader, setLoginInfoHeader } = useContext(UserContext)
    const APIurl = 'http://206.189.91.54/api/v1'
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = userData

    const fetchLogin = async () => {
        const config = { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userData) }
        const res = await fetch(`${APIurl}/auth/sign_in`, config)
        if (res.status === 200) {
            // setLoginInfoHeader({
            //     'access-token': res.headers.get('access-token'),
            //     client: res.headers.get('client'),
            //     expiry: res.headers.get('expiry'),
            //     uid: res.headers.get('uid')
            // });

            navigate('/Homepage')
        }
        
        const data = await res.json()
        console.log(data)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        fetchLogin()
        
    }

    return (
        <div className='login-container'>
            <form className='form-container' onSubmit={onSubmit}>
                <div className='logo-title-section'>
                    <img src={logo} /><p>slack</p>
                    <h1>Sign in to Slack</h1>
                    <div>yourworkspace.slack.com</div>
                </div>

                <div className='inner-form'>
                    <label>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        placeholder='name@work-email.com'
                        value={email}
                        onChange={(e) => HandleChange(e, setUserData)}
                    />

                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Your password'
                        value={password}
                        onChange={(e) => HandleChange(e, setUserData)}
                    />

                    <button>Sign In</button>

                </div>

                <div className='forgotPass-section'>
                    <input
                        type='checkbox'
                    />
                    <label>Remember me on this device</label>
                    <p>Forgot your password? <span>Get help signing in</span></p>
                    <p>Don't have an account? <span href='#' onClick={() => navigate("/Register")}>Sign up</span></p>
                </div>
            </form>
        </div>
    )
}

export default LoginFunction