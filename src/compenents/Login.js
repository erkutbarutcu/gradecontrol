import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logTRUE,logFALSE } from '../redux/reducers/authReducer';

const Login = () => {
  const dispatch=useDispatch();


  const [loginnumber, setNumber] = useState('');
  const [loginpassword, setPassword] = useState('');

  const LoginPLEASE = (e) => {
    e.preventDefault();
    var data = { name: loginnumber, password: loginpassword }
    fetch("http://localhost:3001/auth/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json()).then(res => {
        if (res !==false) {
          dispatch(logTRUE(res.data));

        }
        else {
          dispatch(logFALSE());
        }
      })
  };



  return (
    <div>
      <section class="vh-100">
        <div class="container-fluid h-custom mt-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-4">
              <form onSubmit={LoginPLEASE}>

                <div class="form-outline mb-4">
                  <label class="form-label" >Email address</label>
                  <input type="text" id="form3Example3" class="form-control form-control-lg" placeholder="Enter a valid email address" onChange={(e) => setNumber(e.target.value)} />
                </div>

                <div class="form-outline mb-3">
                  <label class="form-label" >Password</label>
                  <input type="password" id="form3Example4" class="form-control form-control-lg" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div class="d-flex justify-content-between align-items-center">

                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" class="btn btn-primary btn-lg">Login</button>
                  <a href="/" class="text-body mx-3">Forgot password?</a>
                </div>

              </form>
            </div>
          </div>
        </div>

      </section>

    </div>
  )
}
export default Login