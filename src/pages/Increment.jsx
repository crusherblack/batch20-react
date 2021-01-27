import React, {Component, useState} from 'react';
import '../App.css';

// class Increment extends Component{
//     constructor(){
//         super()
//         this.state = {
//             counter : 0
//         }
//         this.decrement = this.decrement.bind(this)
//     }

//     decrement(){
//         const result = this.state.counter - 1
//         this.setState({
//         counter: result
//         });
//     }

//     render(){
//         return(
//             <div className="App-content">
//                 <p>If You click the button the number will Increase</p>

//                 <p>{this.state.counter}</p>

//                 <button style={{marginBottom: 20}} onClick={() => this.setState({counter: this.state.counter + 1})} >Increment</button>

//                 <button onClick={this.decrement} >Decrement</button>
//             </div>
//         )
//     }
// }

function Increment(){

    const [counter, setCounter] = useState(0)

    const decrement = () => 
        setCounter(counter - 1)

    return(
        <div className="App-content">
            <p>If You click the button the number will Increase</p>

            <p>{counter}</p>

            <button onClick = {() => setCounter(counter + 1)} >Increment</button>

            <button onClick = {decrement} >Decrement</button>
        </div>
    )

}

export default Increment