import { useContext } from "react";
import { userContext } from "./ComponentA";

export default function ComponentD() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}
