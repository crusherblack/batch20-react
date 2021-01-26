import React,{Component} from 'react';
import '../App.css'

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

    function greeting(){
        alert("hello this is event with Function")
    }

    return(
        <div className="App-content">
            <p>This is Content with Function</p>

            <button onClick={greeting}>Hitt Me !!!</button>
        </div>
    )
}

  export default Content