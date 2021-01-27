import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Import Components
import Header from "./Components/Headers";
import Content from "./pages/Content";
import Increment from "./pages/Increment";
import ConditionalRendering from "./pages/ConditionalRendering";
import List from "./pages/List";
import Modal from "./pages/Modal";
import Navbar from "./Components/Navbar";

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
          <Router exact path="/list" children={<List />} />
          <Router exact path="/modal" children={<Modal />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
