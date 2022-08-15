
  import '../styles/Login.css';

  function Login() {
      return (
        <form action="" method="post">
            <fieldset>
                <legend>Connexion</legend>

                <div class="lien">
                <a href="signup.html" >C'est votre première connexion ? <br/> Inscrivez-vous !</a>
                </div>

                <div class="field">
                <label for="pseudo">Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" />
                </div>

                <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
                </div>

                <input type="submit"/>
            </fieldset>
        </form>
      );
    }
    
    export default Login;