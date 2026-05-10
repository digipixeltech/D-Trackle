
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("/api/hello")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <h1>ghk</h1>
  );
}
export default App


