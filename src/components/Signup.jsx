import "../styles/Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="" method="post">
      <fieldset>
        <legend>Inscription</legend>

        <div class="lien">
          <Link to="/login">
            Vous avez déjà un compte ? <br /> Cliquez-ici pour vous connecter
          </Link>
        </div>

        <div class="field">
          <label for="pseudo">Pseudo</label>
          <input type="text" name="pseudo" id="pseudo" required />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <input type="submit" />
      </fieldset>
    </form>
  );
}

function HandleSubmit() {}

export default Signup;
