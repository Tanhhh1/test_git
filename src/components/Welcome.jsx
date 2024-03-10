import React, { useState } from 'react';

function Welcome({text, color, random}){
  // console.log(props);
  // cons = {
  //   text: '',
  //   color: '',
  //   random: ''
  // } = props
  return (
    <div>
      Hello World
      <p>
        message form component is: <b>{text}</b>
      </p>
      <button onClick={random}>Random Number</button>
    </div>
  );
};
// const Welcome = () => {
//     const [counter, setCount] = useState(0);
//     const [listData, setlistData] = useState([
//       {
//         id: 1,
//         name: 'ABC',
//         age: 28,
//         gender: 'male',
//       },
//       { 
//         id: 2,
//         name: 'ABC',
//         age: 28,
//         gender: 'male',
//       },
//     ]);
  
//     const renderListData = () => {
//       const list = listData.map((item, index) => {
//         return <div key={index}>
//           <p>Ten: {item.name}</p>
//           <p>Gioi Tinh: {item.gender}</p>
//           <p>Tuoi: {item.age}</p>
//         </div>
//       });
//       return list;
//     }
//     const Year = 2024 - counter;
//     const updateCount = (shouldAdd = true) => {
//       if (shouldAdd) {
//         setCount(n => n + 1);
//         setCount(n => n + 1);
//         setCount(n => n + 1);
//       } else {
//         setCount(counter - 1);
//       }
//     };
  
//     return (
//       <div className="counter-container">
//         <div>Welcome component</div>
//         <h1 className="counter-value">Counter: {counter}</h1>
//         <button onClick={updateCount}>Increase</button>
//         <button onClick={() => updateCount(false)}>Decrease</button>
//         <p>Toi {counter} tuoi</p>
//         <p>toi sinh nam {Year}</p>
//         {renderListData()}
//       </div>
//     );
//   };
export default Welcome;

// export const GoodBye = () => {
//     return <div>GoodBye!</div>
// };