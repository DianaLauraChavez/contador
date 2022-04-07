import { useState } from "react";
function App() {
const[cuenta, setCuenta] =useState(0);
const[paso, setPaso] =useState(1);

const handleClick = () => {
Console.log(paso);
setCuanta(cuenta - paso);

};

  return (
  <div className="App">
    <h3>Contador</h3>
    <hr />
    <h2 className="text-center">{cuenta}</h2>
    <hr />
    <div 
      style={{ 
      display:"flex", 
      justifyContent: "flex-end", 
      marginRight:"5px",
  }}> 

      <button 
      type="button" 
      className="btn btn-primary" 
      onClick={handleClick
    }>
      +1
      </button>

      </div>
    </div>
  );
}

export default App;
