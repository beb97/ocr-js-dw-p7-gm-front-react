import "../styles/Form.css";
import Api from "../js/api";


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const [inputTitre, setTitreValue] = useState("");
  const [inputMessage, setMessageValue] = useState("");

  let navigate = useNavigate();

  async function HandleSubmit(e) {
    e.preventDefault();

    const body = {
      titre : inputTitre,
      message: inputMessage,
    };
    const response = await Api.setPost(body);
    console.log("submited : ", response);

    if (response.status === 200) {
      navigate("/post/"+response.id);
    } else {
      // props.pushMessage(`Erreur ${response.status} : ${response.error}`);
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <fieldset>
        <legend> Nouveau post </legend>
        <div className="field">
          <label htmlFor="titre" >
            Titre:
          </label>
          <input
            type="text"
            id="titre"
            placeholder="votre titre"
            name="titre"
            value={inputTitre}
            required
            onChange={(e) => setTitreValue(e.target.value)}
          />
        </div>
        <div class="field">
          <label htmlFor="message">
            Message:
          </label>
          <textarea
            rows="5"
            cols="1"
            id="message"
            placeholder="votre message"
            name="message"
            required
            value={inputMessage}
            onChange={(e) => setMessageValue(e.target.value)}
          ></textarea>
        </div>

        <input type="submit" className="btn" value="Envoyer post" />
      </fieldset>
    </form>
  );
}

export default PostForm;
