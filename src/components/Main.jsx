import "../styles/Main.css";
import Login from "./Login";
import Signup from "./Signup";
import Posts from "./Posts";
import Post from "./Post";
import User from "./User";
import Toast from "./Toast";
import PostForm from "./PostForm";
import { UserContext } from "./App";

import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function Main(props) {

  const [messages, setMessages] = useState([]);  
  const [compteur, setCompteur] = useState(0);  
  const { isLoged } = useContext(UserContext);

  function pushMessage(message) {
    const newMessage = { texte: message, id: compteur };
    setMessages([...messages, newMessage]);
    setCompteur(compteur+1);
  }

  function removeMessage(id) {
    let newArray = [...messages];
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === id) {
        console.log("find : " + i)
        newArray.splice(i, 1);
        setMessages(newArray);
      }
    }
  }

  return (
    <main>
      <Toast messages={messages} removeMessage={removeMessage}/>
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login pushMessage={pushMessage} />} />
        <Route exact path="/newpost" element={<PostForm />} />
        <Route exact path="/user/:id" element={<User />} />
        <Route exact path="/post/:id" element={<Post />} />
        <Route exact path="/" element={
          isLoged() ? (
          <Posts pushMessage={pushMessage} />
          ) : (
            <Navigate to="/login"/>
          )
        } />
        <Route path="*" element={<p>Page introuvable</p>} />
      </Routes>
    </main>
  );
}

export default Main;
