import { useEffect, useState } from "react";

function App() {
  return (
    <div className="container">
      <h1>Activity Generator</h1>

      <BoredGenerator />

    </div>
  );
}


function BoredGenerator(){
  const [text, setText] = useState("");

  const url = 'https://www.boredapi.com/api/activity';

 async function getData(){
    const res = await fetch(url);
    const data = await res.json();
    setText(data);
  }


    useEffect( function () {
      getData()
    }
    , [])

  return (
    <div className="generator-box">
      <h2>{text.activity}</h2>

      <button onClick={getData}>Generate</button>
    </div>
  )
}

export default App;
