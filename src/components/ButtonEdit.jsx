import "../styles/Button.css";

function ButtonEdit({ToogleEdit}) {
return (
<div className="smallfield fa-container post-edit" id="" data-hidden-when="not-owner" onClick={ToogleEdit}> 
    <i className="las la-edit" aria-hidden="true"></i>
</div>
);
}

export default ButtonEdit;