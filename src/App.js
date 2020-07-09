import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { User, Home, UserDetail, Post } from "./pages";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Redux Middleware</h1>
          <Link to="/"> /Home</Link> <Link to="/user"> /User</Link>{" "}
          <Link to="/post"> /Post</Link>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/user" component={User} />
          </Switch>
          <Switch>
            <Route path="/user/:id" component={UserDetail} />
          </Switch>
          <Switch>
            <Route path="/post" component={Post} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
