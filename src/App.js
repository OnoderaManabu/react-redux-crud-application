import React  from 'react';

// class App extends Component { //クラスコンポーネント
//   render() {
//     return(
//       <React.Fragment>
//         <label htlmFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => { //関数コンポーネント
  return(
  <div>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </div>
  )
}
const Cat = () => { //関数コンポーネント
  return <div>Meow!</div>
}


export default App;
