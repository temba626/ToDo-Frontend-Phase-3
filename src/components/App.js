import React, {useState, useMemo, useContext} from "react";
import './App.css';
import NavBar from "./NavBar";
import TodoApplication from './TodoApplication';

import Home from "./Home"
import { Route, Switch } from "react-router-dom"

import {UserContext} from './UserContext'


function App() {


  const [user, setUser] = useState({
      username: "",
      email_address: "",
      id: "",
      budget: ""
    })
  const providerValue = useMemo(()=>({user, setUser}), [user, setUser])

  const [error, setError] = useState("")
  const [errorMessage, setErrorMessage] = useState("")


  async function login(details) {
    await fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details)
    })
      .then((r) => {

        if (r.status === 200) {
          r.json().then((data) =>
          setUser({
            username: data.username,
            email_address: data.email_address,
            id: data.id,
            budget: data.budget,
            todos: data
          })

      )} else {
        setUser({
          username: "",
          email_address: "",
          id: "",
          budget: ""
        })
      }
    })
  }

  function logout(){
    setUser({
      username: "",
      email_address: ""});}



  return (
    <div className="App">
    <UserContext.Provider value={providerValue}>

      <h1>Here We Go </h1>
      <NavBar />
       <Switch>
          <Route path="/todo-list">
            <TodoApplication />
          </Route>

          <Route path="/">
            <Home error={error} login={login} logout={logout}/>
          </Route>
      </Switch>

    </UserContext.Provider>
    </div>

  );
}

export default App;

