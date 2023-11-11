import React, { useState } from "react";
import Navbar from "./components/navbar";
import NewsBoard from "./components/newsboard";
// import NewsItem from "../components/newsitem";

const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div className="App">
    {/* Passing Props form here */}
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}
export default App;