import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Content from "./components/Content";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Content />
      <Footer />
    </div>
  );
}

export default App;
