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

function Header() {

    function getData(){
        return 11+9
    }

    const year = 2021

    return(
        <div>
            <h1>Wellcome Batch {getData()} {year} with Function</h1>
        </div>
    )
}

  export default Header