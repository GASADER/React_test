import './Header.css'

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <a href="" className="logo">
                        <img src="" alt="" id="logo-img" />
                        <p className='logo-text'>Gymmini</p>
                    </a>
                </div>
                <div className="signin-container">
                    <a href="" className="signin">Sign in</a>
                    <a href="" className="signup">Sign up</a>
                    <a href="" className="getstarted">Get started</a>
                </div>
            </div>
        </header>
    )
}

export default Header