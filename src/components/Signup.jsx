  import '../styles/Signup.css';

  function Signup() {
      return (
        <form action="" method="post">
            <fieldset>
            <legend>Inscription</legend>

            <div class="lien">
                <a href="login.html" >Vous avez déjà un compte ? <br/> Conenctez-vous !</a>
            </div>

            <div class="field">
                <label for="pseudo">Pseudo</label>
                <input type="text" name="pseudo" id="pseudo" required/>
            </div>
                <div class="field">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required/>
                </div>
                <input type="submit"/>
            </fieldset>
        </form>

      );
    }
    
    export default Signup;