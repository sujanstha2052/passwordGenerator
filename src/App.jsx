import React from "react";
import { useCallback } from "react";
import { useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumber) {
      str += "0123456789";
    }

    if (isCharacter) {
      str += "!@#$%^&*-=_+";
    }

    for (var i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      generatedPassword += str.charAt(char);
    }

    setPassword(generatedPassword);
  }, [length, isNumber, isCharacter, setPassword]);

  return (
    <div>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
    </div>
  );
};

export default App;
