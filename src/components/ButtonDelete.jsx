import "../styles/Button.css";

function ButtonDelete({ DeletePost }) {
  return (
    <div
      className="smallfield fa-container post-edit"
      id=""
      data-hidden-when="not-owner"
      onClick={DeletePost}
    >
      <i className="las la-trash" aria-hidden="true"></i>
    </div>
  );
}

export default ButtonDelete;
