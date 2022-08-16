import "../styles/Post.css";
import DateHelper from "../js/date";
import { Link } from "react-router-dom";

function PostPreview({ post }) {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/100"
        className="card-img-top"
        alt="placeholder"
      />
      <Link to={`/post/${post.id}`}>
        <div className="card-body">
          <h2>{post.titre}</h2>
        </div>
      </Link>

      <div className="card-footer">
        { post.user ?
        <Link to={`/user/${post.user.id}`} className="author">
          {post.user.pseudo}
        </Link>
        :
        <em>deleted</em>
        }
        <span className="date">
          {DateHelper.timeSince(new Date(post.createdAt))}
        </span>
      </div>
    </div>
  );
}

export default PostPreview;
