import "../styles/Header.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./App";

function Header(props) {
  // const [isLoged, setIsLoged] = useState(false)
  const {user, isLoged, setUser} = useContext(UserContext);

  const LogOut = () => {
    setUser(false);
    localStorage.removeItem("expires");
    localStorage.removeItem("token");
  }

  return (
    <header>
      <Link to="/">
        <h1>
          <i className="fa fa-globe" aria-hidden="true"></i>{" "}
          <span id="logo-text">Groupomania</span>
        </h1>
      </Link>

      <nav>
        <ul className="nav">
          { !isLoged() && (
            <Link to="/login">
              <li className="field">
                <i className="fa fa-letter"></i> Connexion
              </li>
            </Link>
          )}
          {!isLoged() && (
            <Link to="/signup">
              <li className="field">
                <i className="fa fa-letter"></i> Inscription
              </li>
            </Link>
          )}
          {isLoged() && (
            <Link to="/login" onClick={LogOut}>
              <li className="field">
                <i className="fa fa-letter"></i> Déconnexion
              </li>
            </Link>
          )}
          {isLoged() && (
            <Link to={`/user/${user.id}`} id="nav-user">
              <li className="field">
                <span id="avatar">p</span>
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
