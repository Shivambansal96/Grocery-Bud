// // // import React, { useState } from 'react'
// // // import './Homepage.css'

// // // const Homepage = () => {

// // //   const [data, setData] = useState([]);
// // //   const [searchValue, setSearchValue] = useState('');



// // //   function buttonHandler() {
// // //     // alert('buttons is clicked')

// // //     setData([...data, searchValue])
// // //     console.log(data)

// // //   }


// // //   // console.log(data);


// // //   return (
// // //     <div id='homepage'>
       
// // //         <div id="card">

// // //             <div id="heading">
// // //                 <h2>Grocery Bud</h2>
// // //             </div>

// // //             <div id="add-items-container">
// // //                 <input onChange={(e)=>{
// // //                   setSearchValue(e.target.value)
// // //                 }} type="text" name="" id="add-item-field" />
// // //                 <button onClick={buttonHandler} id='add-item-button'>Add Item</button>
// // //             </div>

// // //             <div id='output'>
// // //                 {
// // //                   data ? (
// // //                     data.map((item, index)=> {
// // //                       // console.log(index);
// // //                       return(<p>{item}</p>)
// // //                     })                    
// // //                   )
// // //                   : 'not working'

// // //                   // <p>Hello</p>
// // //                 }
// // //             </div>

// // //         </div>

// // //     </div>
// // //   )
// // // }

// // // export default Homepage


// // import React, { useState } from 'react';
// // import './Homepage.css';

// // const Homepage = () => {
// //   const [data, setData] = useState([]); 
// //   const [searchValue, setSearchValue] = useState('');

// //   function buttonHandler() {

// //     if (searchValue.trim() !== "") {
// //       setData([...data, searchValue]); 
// //       setSearchValue(''); 
// //     }

// //     localStorage.setItem(data);
// //   }


// //   function DeleteButton() {
// //     alert('delete');

// //   }

// //   return (
// //     <div id='homepage'>
// //         <div id="card">
// //             <div id="heading">
// //                 <h2>Grocery Bud</h2>
// //             </div>
// //             <div id="add-items-container">
// //                 <input
// //                   value={searchValue}
// //                   onChange={(e) => setSearchValue(e.target.value)}
// //                   type="text"
// //                   id="add-item-field"
// //                 />
// //                 <button onClick={buttonHandler} id='add-item-button'>Add Item</button>
// //             </div>
// //             <div id='output' style={{width:'50%'}}>
// //                 {
// //                   data.length > 0 ? (
// //                     data.map((item, index) => {
// //                       return (
// //                         <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
// //                             <input type="checkbox" name="" id="" />
// //                             <p key={index}>{item}</p>
// //                             {/* {localStorage.getItem(item)} */}
// //                             <button onClick={DeleteButton}>Delete</button>
// //                         </div>
// //                       )
// //                     })
// //                   ) : <p>No items added.</p>
// //                 }
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Homepage;




// import React, { useState } from 'react';
// import './Homepage.css';

// const Homepage = () => {
//   const [data, setData] = useState([]);
//   const [searchValue, setSearchValue] = useState('');

//   function buttonHandler() {
//     if (searchValue.trim() !== "") {
//       // Add a new item as an object with 'value' and 'isChecked' properties
//       setData([...data, { value: searchValue, isChecked: false }]);
//       setSearchValue('');
//     }
//   }

//   function handleCheckboxChange(index) {
//     const newData = data.map((item, i) => {
//       if (i === index) {
//         return { ...item, isChecked: !item.isChecked }; // Toggle the 'isChecked' property
//       }
//       return item;
//     });
//     setData(newData);
//   }

//   function deleteItem(index) {
//     setData(data.filter((_, i) => i !== index));
//   }

//   return (
//     <div id='homepage'>
//         <div id="card">
//             <div id="heading">
//                 <h2>Grocery Bud</h2>
//             </div>
//             <div id="add-items-container">
//                 <input
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   type="text"
//                   id="add-item-field"
//                 />
//                 <button onClick={buttonHandler} id='add-item-button'>Add Item</button>
//             </div>
//             <div id='output' style={{width:'50%'}}>
//                 {
//                   data.length > 0 ? (
//                     data.map((item, index) => {
//                       return (
//                         <div key={index} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
//                             <input
//                               type="checkbox"
//                               checked={item.isChecked}
//                               onChange={() => handleCheckboxChange(index)}
//                             />
//                             <p style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>
//                               {item.value}
//                             </p>
//                             <button onClick={() => deleteItem(index)}>Delete</button>
//                         </div>
//                       )
//                     })
//                   ) : <p>No items added.</p>
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Homepage;




// import React, { useState, useRef } from 'react';
// import './Homepage.css';

// const Homepage = () => {
//   const [data, setData] = useState([]);
//   const [searchValue, setSearchValue] = useState('');
//   const inputRef = useRef(null);

//   function buttonHandler() {
//     if (searchValue.trim() !== "") {
//       setData([...data, { value: searchValue, isChecked: false }]);
//       setSearchValue('');
//       inputRef.current.focus(); // Focuses the input field after adding an item
//     }
//   }

//   function handleCheckboxChange(index) {
//     const newData = data.map((item, i) => {
//       if (i === index) {
//         return { ...item, isChecked: !item.isChecked };
//       }
//       return item;
//     });
//     setData(newData);
//   }

//   function deleteItem(index) {
//     setData(data.filter((_, i) => i !== index));
//   }

//   function handleKeyPress(event) {
//     if (event.key === 'Enter') {
//       buttonHandler(); // Allows adding items with the Enter key
//     }
//   }

//   return (
//     <div id='homepage'>
//         <div id="card">
//             <div id="heading">
//                 <h2>Grocery Bud</h2>
//             </div>
//             <div id="add-items-container">
//                 <input
//                   ref={inputRef}
//                   value={searchValue}
//                   onChange={(e) => setSearchValue(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   type="text"
//                   id="add-item-field"
//                   placeholder="Add a new item..."
//                 />
//                 <button onClick={buttonHandler} id='add-item-button'>Add Item</button>
//             </div>
//             <div id='output'>
//                 {data.length > 0 ? (
//                     data.map((item, index) => (
//                         <div key={index} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
//                             <input
//                               type="checkbox"
//                               checked={item.isChecked}
//                               onChange={() => handleCheckboxChange(index)}
//                             />
//                             <p style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>
//                               {item.value}
//                             </p>
//                             <button onClick={() => deleteItem(index)}>Delete</button>
//                         </div>
//                     ))
//                 ) : <p>No items added.</p>}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Homepage;



import React, { useState, useRef } from 'react';
import './Homepage.css';
import Toast from '../components/Toast';  // Import the Toast component

const Homepage = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showToast, setShowToast] = useState(false);
  const inputRef = useRef(null);

  function buttonHandler() {
    if (searchValue.trim() !== "") {
      setData([...data, { value: searchValue, isChecked: false }]);
      setSearchValue('');
      inputRef.current.focus();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Toast disappears after 3 seconds
    }
  }

    function handleCheckboxChange(index) {
    const newData = data.map((item, i) => {
      if (i === index) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setData(newData);
  }

  function deleteItem(index) {
    setData(data.filter((_, i) => i !== index));
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      buttonHandler(); // Allows adding items with the Enter key
    }
  }

  return (
    <div id='homepage'>
        <div id="card">
            <div id="heading">
                <h2>Grocery Bud</h2>
            </div>
            <div id="add-items-container">
                <input
                  ref={inputRef}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  id="add-item-field"
                  placeholder="Add a new item..."
                />
                <button onClick={buttonHandler} id='add-item-button'>Add Item</button>
            </div>
            <div id='output'>
                {data.length > 0 ? data.map((item, index) => (
                    <div key={index} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <input type="checkbox" checked={item.isChecked} onChange={() => handleCheckboxChange(index)} />
                        <p style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}>{item.value}</p>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </div>
                )) : <p>No items added.</p>}
            </div>
        </div>
        {showToast && <Toast message="Item added successfully!" onClose={() => setShowToast(false)} />}
    </div>
  )
}

export default Homepage;
