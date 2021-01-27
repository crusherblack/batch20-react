import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Import Components
import Header from "./Components/Headers";
import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";

//Import Pages
import Content from "./pages/Content";
import Increment from "./pages/Increment";
import ConditionalRendering from "./pages/ConditionalRendering";
import List from "./pages/List";
import Modal from "./pages/Modal";
import Todo from "./pages/Todo";

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <Header />
//         <Content />
//       </div>
//     )
//   }
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/increament">
            <Increment />
          </Route>
          <Route exact path="/conditional-rendering">
            <ConditionalRendering />
          </Route>
          <PrivateRoute exact path="/list" children={<List />} />
          <PrivateRoute exact path="/modal" children={<Modal />} />
          <Route exact path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
