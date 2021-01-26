import React, {Component} from 'react'

// class Header extends Component {

//     getData(){
//         return 10+10
//     }

//     render(){
      
//         const year = 2021

//         return(
//         <div>
//           <h1>Wellcome Batch {this.getData()} {year}</h1>
//         </div>
//       )
//     }
//   }

function Header(props) {

    function getData(){
        return 11+9
    }

    const year = 2021

    return(
        <div>
            {/* <h1>Wellcome Batch {getData()} {year} with Function</h1> */}
            <h1>{props.changeTitle}</h1>
            <h1>{props.title2}</h1>
        </div>
    )
}

  export default Header