import "../styles/Button.css";

function ButtonLike({LikePost, post}) {
return (
<div className="smallfield fa-container post-edit" id="" data-hidden-when="not-owner" onClick={LikePost}> 
    <i className="las la-thumbs-up" aria-hidden="true"></i>
    <span id="like-count">{post?post.likes.length:0}</span>
    {/* <div className="field" id="like-list"></div> */}
</div>
);
}

export default ButtonLike;