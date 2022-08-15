import '../styles/Header.css';

function Header() {
    return (
        <header>
            <a href="index.html" >
                <h1><i className="fa fa-globe" aria-hidden="true">
                    </i> <span id="logo-text">Groupomania</span>
                </h1>
            </a>

            <nav>
                <ul className="nav">
                    <li data-hidden-when="logedin" className="field"> <a href="login.html" className="nav-link"><i className="fa fa-letter"></i> Connexion</a> </li>
                    <li data-hidden-when="logedin" className="field"> <a href="signup.html" className="nav-link"><i className="fa fa-letter"></i> Inscription</a> </li>
                    <li data-hidden-when="logedoff" className="field"> <a className="nav-link"><i className="fa fa-letter"></i> Déconnexion</a> </li>
                    <li data-hidden-when="logedoff" className="field"> <a href="user.html" className="nav-link" id="nav-user"> <span id="avatar">P</span></a></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;