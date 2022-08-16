import "../styles/Post.css";
import DateHelper from "../js/date";
import { Link, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/100"
        className="card-img-top"
        alt="placeholder"
      />

      <div className="card-body">
        <h2>TITRE : ID = {id} </h2>
      </div>

      <div className="card-footer">
        <Link to="/user" className="author">
          USER
        </Link>
        <span className="date">{DateHelper.timeSince(new Date())}</span>
      </div>
    </div>
  );
}
export default Post;
