import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeInput(e) {
    setEmail(e.target.value);
  }
  function changePwd(e) {
    setPassword(e.target.value);
  }
  function btn_click() {
    let payload = {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(`https://reqres.in/api/login`, payload)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response && response.token) {
          let token = response.token;
          localStorage.setItem("token", token);
          window.location.href = "/#/";
        }
      });
  }
  function isUserAuthenticated() {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (isUserAuthenticated()) {
      window.location.href = "/#/";
    }
  }, []);
  return (

    <div className="login">
        <div className="container">
      <div className="ques">
        
        E-Mail
        <input
          className="input_box"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => changeInput(e)}
          type="text"
        />
      </div>
      <div className="ques">
    
        Password
        <input
          className="pwd_box"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => changePwd(e)}
          type="password"
        />
      </div>
      <div className="btn-tag">
        <button onClick={btn_click} className="btn">
          Enter
        </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
