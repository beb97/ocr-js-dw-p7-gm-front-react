import "../styles/Post.css";
import DateHelper from "../js/date";
import Api from "../js/api";
import ButtonEdit from "./ButtonEdit";
import ButtonLike from "./ButtonLike";
import ButtonDelete from "./ButtonDelete";

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, updatePost] = useState("");
  const [isEditing, setEditing] = useState(false);

  useEffect(() => {
    Api.getPost(id)
      .then((post) => updatePost(post))
      .catch((post) => updatePost(""));
  }, []);

  function ToogleEdit() {
    setEditing(!isEditing)
  }

  return (
    <fieldset>
      <legend>
        { !isEditing && <div id="titre">{post.titre}</div> }
        { isEditing && <input id="titre-input" className="hidden" name="titre" value={post.titre}/> }
      </legend>

      <div className="post">
        { !isEditing && (<div className="field post-message" id="post">
            {post.message}
          </div>)
        }

        { isEditing && (<div className="field post-message-wrapper hidden">
          <form id="post-form" data-id="4">
            <textarea rows="5" cols="1" className="" id="post-input" name="message" value={post.message}></textarea>
            <br/>
            <input id="post-submit" type="submit"/>
          </form>
        </div> )}
        <ButtonLike />
        <ButtonEdit ToogleEdit={ToogleEdit}/>
        <ButtonDelete />
      </div>

      <div id="extra">
        {post && (
          <Link to={`/user/${post.user.id}`} className="author">
            <div>{post.user.pseudo}</div>
          </Link>
        )}
        <span id="date">{DateHelper.timeSince(new Date())}</span>
      </div>
    </fieldset>
  );
}
export default Post;
