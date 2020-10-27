import React, {useState,useLayoutEffect,useEffect } from 'react';

function App() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    // // console.log("useEffect");
    // const title = document.querySelector("#title");
    // const titleWidth = title.getBoundingClientRect().width;
    // // console.log("useLayoutEffect");
    // if (width !== titleWidth) {
    //   setWidth(titleWidth);
    // }
  });
  useLayoutEffect(() => {
    const title = document.querySelector("#title");
    const titleWidth = title.getBoundingClientRect().width;
    // console.log("useLayoutEffect");
    if (width !== titleWidth) {
      setWidth(titleWidth);
    }
  });
  
  return (
    <div>
      <h1 id="title">hello</h1>
      <h2>{width}</h2>
    </div>
  );
}

export default App;