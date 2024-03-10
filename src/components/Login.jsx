import React, { useState } from 'react';
import './assets/css/LoginComponent.css';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Email = (e) => {
    setEmail(e.target.value);
  };

  const Password = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (!email || !password) {
      alert('Vui lòng điền đủ thông tin.');
    } else if (email === 'tuananh@gmail.com' && password === '123456') {
      alert('Đăng nhập thành công');
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <div className="wrapper">
      <div className="title">Login Form</div>
      <form action="#">
        <div className="field">
          <input
            type="text"
            value={email}
            onChange={Email}
          />
          <label>Email Address</label>
        </div>
        <div className="field">
          <input
            type="password"
            value={password}
            onChange={Password}
          />
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="field">
          <input type="submit" onClick={submit} />
        </div>
        <div className="signup-link">
          Not a member? <a href="#">Signup now</a>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
