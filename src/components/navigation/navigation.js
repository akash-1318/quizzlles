import './navigation.css'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return(
        <header className="header__nav">
        <div className="header__nav-left">
            <Link to = "/">
                <img src="/assets/images/galaxy.png" className="library__logo" />
            </Link>
            <Link to = "/" className="logo__name-link">
                <p className="library__logo-name">Quizzles</p>
            </Link>
        </div>
        <div className="header__nav-right">
            <a href="https://github.com/akash-1318">
                <i className="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/akash-sharma-0251051a1">
                <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://twitter.com/Akasharma18">
                <i className="bx bxl-twitter"></i>
            </a>
        </div>
    </header>
    )
}

export {Navigation}