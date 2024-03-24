import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'
import { apiGetter } from '../api/get.js';
//import { apiPoster } from '../api/posts.js';
import { SHA1 } from 'crypto-js';


interface Element{
    username: string
    password: string
}


export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validLogin, setValidLogin] = useState(-1);

  const processInput = () => {
      let found = false;
        apiGetter('')
        .then(data => {
            data.forEach((element: Element)=>{
              console.log(element.username);
              if(username  === element.username && SHA1(password).toString() === element.password){
                found = true;
              }
            })
            console.log(data);
            if(found){
              setValidLogin(1);
              navigate('../dashboard');
            }else{
              setValidLogin(0);
            }
        })
        .catch(error => {
            console.error('Error getting data:', error);
        });
  };

  return (
    <>
      {validLogin === 0 && (
        <div className="alert alert-danger" role="alert">
          The username or password is incorrect!
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setValidLogin(-1)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}

      <label>
        <input
          className="textbox"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="textbox"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <div>
        <button className="btn--login" onClick={processInput}>Log In</button>
        <Link to="/signup">Don't have an account? Create one!</Link>
      </div>
    </>
  );
}
