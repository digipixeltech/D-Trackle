import React from 'react'
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <h1>React Frontend</h1>
  );
}
export default App


