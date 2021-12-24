import React from "react";

// class components extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>
//           { this.props.name }
//         </h1>
//         <ul>
//           <li>good one</li>
//           <li>good two</li>
//           <li>good three</li>
//         </ul>
//       </div>
//     )
//   }
// }
export default function SoppingList (props) {
  return (
    <div>
      {props.name}
    </div>
  )
}

// export default components;