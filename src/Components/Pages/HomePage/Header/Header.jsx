import './Header.css'
import clockLogo from '../../../../assets/images/clock-logo.png'

const Header = () => {
    return (
        <div className='header-section'>
            <div className='left-section'>
                <h1>BURGER</h1>
            </div>

            <div className='middle-section'>
                <div><img src={clockLogo}/></div>
                <input/>
            </div>

            <div className='right-section'>
                <h1>Log out?</h1>
            </div>
        </div>
    )
}

export default Header