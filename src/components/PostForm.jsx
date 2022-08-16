import "../styles/Form.css";
import { useState } from "react";

function PostForm() {
  const [inputTitre, setTitreValue] = useState("");
  const [inputMessage, setMessageValue] = useState("");
  return (
    <form>
      <fieldset>
        <legend> Nouveau post </legend>
        <p>{inputTitre}</p>
        <p>{inputMessage}</p>
        <div class="field">
          <label for="titre" class="">
            Titre:
          </label>
          <input
            type="text"
            class=""
            id="titre"
            placeholder="votre titre"
            name="titre"
            value={inputTitre}
            onChange={(e) => setTitreValue(e.target.value)}
          />
        </div>
        <div class="field">
          <label for="message" class="">
            Message:
          </label>
          <textarea
            rows="5"
            cols="1"
            class=""
            id="message"
            placeholder="votre message"
            name="message"
            value={inputMessage}
            onChange={(e) => setMessageValue(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" class="btn" value="Envoyer post" />
      </fieldset>
    </form>
  );
}

export default PostForm;
