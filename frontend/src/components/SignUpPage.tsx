
import "./SignUpPage.css";
import React, { useState } from "react"

export default function SignUpPage() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const processInput = () => {
        setFirstName("")
        setLastName("")
        setUsername("")
        setPassword("")
    }

  return (
    <>
      <ul id="signup">
        <li>
          First Name:{" "}
          <input type="text" placeholder="(e.g. John)" className="textbox" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
        </li>
        <li>
          Last Name:{" "}
          <input type="text" placeholder="(e.g. Smith)" className="textbox" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
        </li>
        <li>
          Username: <input type="text" className="textbox" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </li>
        <li>
          Password: <input type="password" className="textbox" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        </li>
      </ul>
      <button onClick={processInput}>Sign Up</button>
    </>
  );
}
