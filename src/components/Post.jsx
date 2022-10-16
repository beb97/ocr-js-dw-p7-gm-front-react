import "../styles/Post.css";
import DateHelper from "../js/date";
import Api from "../js/api";
import ButtonEdit from "./ButtonEdit";
import ButtonLike from "./ButtonLike";
import ButtonDelete from "./ButtonDelete";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, updatePost] = useState("");
  // const [inputTitre, updateTitre] = useState("");
  // const [inputMessage, updateMessage] = useState("");
  const [isEditing, setEditing] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, []);

  function getPost() {
    Api.getPost(id)
      .then((post) => updatePost(post))
      .catch((post) => updatePost(""));
  }

  function ToogleEdit() {
    setEditing(!isEditing);
  }

  async function DeletePost() {
    const response = await Api.deletePost(id);
    if (response.status === 200) {
      navigate("/");
    } else {
      console.log(`Erreur ${response.status} : ${response.error}`);
    }
  }

  async function putPost(e) {
    e.preventDefault();

    const body = {
      titre: post.titre,
      message: post.message,
    };
    const response = await Api.putPost(id, body);
    if (response.status === 200) {
      setEditing(false);
      getPost();
    } else {
      console.log(`Erreur ${response.status} : ${response.error}`);
      getPost();
    }
  }

  async function LikePost(e) {
    e.preventDefault();
    let response;

    // TODO : remplacer par une vraie recherche (contains, sur le userId actuel)
    if (post.likes.length > 0) {
      response = await Api.unlikePost(id);
    } else {
      response = await Api.likePost(id);
    }

    if (response.status === 200) {
      getPost();
    } else {
      console.log(`Erreur ${response.status} : ${response.error}`);
    }
  }

  return (
    <form onSubmit={putPost}>
      <fieldset>
        <legend>
          {!isEditing && <div id="titre">{post.titre}</div>}
          {isEditing && (
            <input
              id="titre-input"
              className="hidden"
              name="titre"
              value={post.titre}
              onChange={(e) => updatePost({ ...post, titre: e.target.value })}
            />
          )}
        </legend>

        <div className="post">
          {!isEditing && (
            <div className="field post-message" id="post">
              {post.message}
            </div>
          )}

          {isEditing && (
            <div className="field post-message-wrapper hidden">
              <textarea
                rows="5"
                cols="1"
                className=""
                id="post-input"
                name="message"
                value={post.message}
                onChange={(e) =>
                  updatePost({ ...post, message: e.target.value })
                }
              ></textarea>
              <br />
              <input id="post-submit" type="submit" />
            </div>
          )}
          <ButtonLike LikePost={LikePost} post={post} />
          <ButtonEdit ToogleEdit={ToogleEdit} />
          <ButtonDelete DeletePost={DeletePost} />
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
    </form>
  );
}
export default Post;
