import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import Api from "../js/api";

function User() {
  const { id } = useParams();
  const [user, updateUser] = useState("");
  
  useEffect(() => {
    Api.getUser(id)
      .then((user) => updateUser(user))
      .catch((post) => updateUser(""));
  }, []);


  return (
    <fieldset>
      <legend>pb</legend>
      <form data-id="1">
        <div className="field">
          <label htmlFor="pseudo" >Pseudo :</label>
          <div >
            <input type="text"  id="pseudo" name="pseudo" value={user.pseudo}/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" >Mail</label>
          <div >
            <input type="text"  name="email" id="email" value={user.email}/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="date" >Membre depuis</label>
          <div >
            <input type="text" name="date" id="date" value={user.createdAt} disabled="true"/>
          </div>
        </div>
        <div className="field">
          <label htmlFor="isAdmin" className="">Administrateur ?</label>
          <div >
            <input type="checkbox" className="" name="isAdmin" id="isAdmin" value={user.isAdmin} disabled="true"/>
          </div>
        </div>
        <input className="btn" type="submit" value="Modifier utilisateur"/>
      </form>
    </fieldset>
  )
}

export default User;
