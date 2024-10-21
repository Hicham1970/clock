/* eslint-disable no-unused-vars */
import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

// initialise and export createContext:
export const userContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState("Hicham");
  return (
    <div className="box">
      <h1>ComponentA</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
        <ComponentB user={user} />
      </userContext.Provider>
    </div>
  );
}
