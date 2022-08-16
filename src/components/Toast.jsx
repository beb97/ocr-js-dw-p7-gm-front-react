function Toast(props) {
  function HandleClick(id) {
    console.log(id);
    props.removeMessage(id);
  }

  return props.messages.map((message, index) => {
    return (
      <div id="infos" key={message.id}>
        <div className="toast">
          <div className="toast-message">{message.texte}</div>
          <div className="toast-close" onClick={(e) => HandleClick(message.id)}>
            x
          </div>
        </div>
      </div>
    );
  });
}

export default Toast;
