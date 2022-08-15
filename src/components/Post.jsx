import '../styles/Post.css';
import DateHelper from '../js/date';

function Post({post}) {
return (
    <div className="card">
    {/* <div class="card" onClick={HandleClick}> */}
        <img
            src="https://via.placeholder.com/100"
            className="card-img-top"
            alt="placeholder"
        />
        <div className="card-body">
            <h2>{post.titre}</h2>
        </div>
        <div className="card-footer">
            <a href="user.html" className="author">
            {post.user.pseudo}
            </a>
            <span className="date">{DateHelper.timeSince(new Date(post.createdAt))}</span>
        </div>
    </div>
)
}

// function HandleClick(e) {

// }

export default Post;