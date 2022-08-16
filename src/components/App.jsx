import logo from "../assets/logo.svg";
import "../styles/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Api from "../js/api";
import { Fragment, useState, createContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

export const UserContext = createContext(false);

function App() {
  const [user, setUser] = useState(false);

  function isLoged() {
    return user !== false;
  }

  function isAdmin() {
    return isLoged() && user.isAdmin;
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    // Get user info from token
    if (token) {
      Api.getCurrentUser()
        .then((res) => {
          if (res.status === 200) {
            setUser(res);
          } else {
            localStorage.removeItem("token");
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <BrowserRouter>
      <Fragment>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
            isLoged: isLoged,
            isAdmin: isAdmin,
          }}
        >
          <Header />
          <Main />
          <Footer />
        </UserContext.Provider>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
