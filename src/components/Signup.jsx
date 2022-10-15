import "../styles/Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../js/api";

function Signup() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();

    const body = {
      pseudo: pseudo,
      password: password,
    };
    const response = await Api.signup(body);
    console.log("submited : ", response);
    if (response.status === 200) {
      navigate("/login");
    } else {
      // props.pushMessage(`Erreur ${response.status} : ${response.error}`);
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <fieldset>
        <legend>Inscription</legend>

        <div class="lien">
          <Link to="/login">
            Vous avez déjà un compte ? <br /> Cliquez-ici pour vous connecter
          </Link>
        </div>

        <div class="field">
          <label for="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            required
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" />
      </fieldset>
    </form>
  );
}

function HandleSubmit() {}

export default Signup;
