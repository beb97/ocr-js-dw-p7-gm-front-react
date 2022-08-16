import "../styles/Login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../js/api";
import { UserContext } from "./App";

function Login(props) {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();

    const crendentials = {
      pseudo: pseudo,
      password: password,
    };
    const response = await Api.login(crendentials);
    console.log("submited : ", response);

    if (response.status === 200) {
      localStorage.setItem("expires", response.expires);
      localStorage.setItem("token", response.token);
      setUser(response.user);
      navigate("/");
    } else {
      props.pushMessage(`Erreur ${response.status} : ${response.error}`);
    }

  }

  return (
    <form onSubmit={HandleSubmit}>
      <fieldset>
        <legend>Connexion</legend>

        <div className="lien">
          <Link to="/signup">
            C'est votre première visite ? <br /> Cliquez ici pour créer votre
            compte
          </Link>
        </div>

        <div className="field">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="votre pseudo"
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="votre password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input type="submit" />
      </fieldset>
    </form>
  );
}

export default Login;
