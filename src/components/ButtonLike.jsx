import "../styles/Button.css";

function ButtonLike() {
return (
<div className="smallfield fa-container post-edit" id="" data-hidden-when="not-owner"> 
    <i className="las la-thumbs-up" aria-hidden="true"></i>
    <span id="like-count">0</span>
    {/* <div className="field" id="like-list"></div> */}
</div>
);
}

export default ButtonLike;