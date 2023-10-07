import React from "react";
import { useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </div>
  );
};

export default App;
