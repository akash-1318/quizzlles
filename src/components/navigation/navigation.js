import './navigation.css'

const Navigation = () => {
    return(
        <header className="header__nav">
        <div className="header__nav-left">
            <a href="#">
                <img src="/assets/images/galaxy.png" className="library__logo" />
            </a>
            <a href="#" className="logo__name-link">
                <p className="library__logo-name">Quizzles</p>
            </a>
        </div>
        <div className="header__nav-right">
            <a href="#">
                <i className="bx bxl-github"></i>
            </a>
            <a href="#">
                <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
                <i className="bx bxl-twitter"></i>
            </a>
        </div>
    </header>
    )
}

export {Navigation}