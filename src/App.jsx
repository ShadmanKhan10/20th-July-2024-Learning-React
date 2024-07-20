// import React, { useState } from "react";
// import Navbar from "./Component/Navbar";
// import Contact from "./Component/Contact";
// import Home from "./Component/Home";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />{" "}
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import React, { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    counterRef.current++;

    console.log("count", count);
    console.log("counterRef", counterRef.current);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Add</button>
    </div>
  );
}
