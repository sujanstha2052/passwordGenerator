import React from "react";
import { useEffect } from "react";
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

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isCharacter, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
        />

        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            className="cursor-pointer"
            type="range"
            min={8}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={isNumber}
            onChange={() => setIsNumber((prev) => !prev)}
          />
          <label>Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={isCharacter}
            onChange={() => setIsCharacter((prev) => !prev)}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
  );
};

export default App;
