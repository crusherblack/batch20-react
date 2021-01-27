import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// class Content extends Component {

//     greeting(){
//         alert("Hallo Siswa Bootcamp Batch 20")
//     }

//     render(){
//       return(
//         <div className="App-content">
//           <p>This is Content</p>

//           <button onClick={this.greeting} >
//             Hit Me !!!!
//           </button>
//         </div>
//       )
//     }
//   }

function Content() {
  function greeting() {
    alert("hello this is event with Function");
  }

  return (
    <div className="App-content">
      <p>This is Content with Function</p>
      <button style={{ marginBottom: 20 }} onClick={greeting}>
        Hitt Me !!!
      </button>
      <Button variant="outline-info" as={Link} to="/modal">
        Go To Modal
      </Button>
      <Link to="/modal">
        <Button variant="outline-info">Go To Modal 2</Button>
      </Link>

      <img src="https://www.qureta.com/uploads/post/lola_zieta.png" />
    </div>
  );
}

export default Content;
