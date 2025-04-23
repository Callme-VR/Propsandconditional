// props- are the way in react passing data from one component to another components
// or another word we say pasing data from parent com to child comp

import { useState } from "react"

// import Greeting from "./components/Greeting";
// export default function App() {
//   return (
//     <div>
//       <Greeting name="vishal" />
//       <Greeting name="Samsung" />
//     </div>
//   );
// }


// conditional rendering -you can render different component or element on certain condition
// import React, { useState } from "react";
// export default function App() {
//   const [isTransparent,setTransparent]=useState(false);

//   return (
//     <div>
//       <button onClick={() => setTransparent(!isTransparent)}>
//         click button
//       </button>
//       {isTransparent && <p>This message is conditionally rendered!</p>}
//     </div>
//   );
// }

// LIST AND KEYS

// Rendring lists each items should have a unique props for react to track changes effciently


// import ItemsList from "./components/ItemsList"
// export default function App(){
//   const items=[
//     {
//       id:1,
//       name:"vishal Rajput"
//     },
//     {
//       id:2,
//       name:"Anjali Pandey Rajput"
//     }
//   ]
  
//   return (
//     <div>
//       <ItemsList items={items} />
//     </div>
//   )
// }

// export default function App(){
//   const [count,setCounter]=useState(0);

//   function increment(){
//     setCounter(count+1);
//   }
//   return(
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={increment}>Click me</button>
//     </div>
//   )
// }