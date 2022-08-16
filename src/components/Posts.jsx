import "../styles/Posts.css";
import Api from "../js/api";
import Post from "./PostPreview";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7135822-reutilisez-vos-composants-avec-les-props
function Posts(props) {
  const [posts, updatePosts] = useState([]);

  function showPosts(posts) {
    console.log(posts.status);
    if (posts.status === 200) {
      console.log(posts);
      updatePosts(posts);
    } else {
      props.pushMessage(`Erreur ${posts.status} : ${posts.error}`);
      // navigate("/login")
    }
  }

  useEffect(() => {
    Api.getPosts()
      .then((posts) => showPosts(posts))
      .catch((posts) => updatePosts([]));
  }, []);

  return (
    <section>
      <Link to="/newpost">
        <div className="card" id="new-post">
          <div className="card-body">
            <h2>
              <i className="fas fa-plus-circle"></i>
            </h2>
            <p className="message text-white">Composez un nouveau message</p>
          </div>
        </div>
      </Link>

      {posts.length > 0 ? (
        posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })
      ) : (
        <div></div>
      )}
    </section>
  );
}

export default Posts;
