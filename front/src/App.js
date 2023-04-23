import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [info, setInfo] = useState()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [login, setLogin] = useState();
  const [passwd, setPasswd] = useState();
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwdDirty, setPasswdDirty] = useState(false);
  const [loginError, setLoginError] = useState('Login can`t be empty');
  const [passwdError, setPasswdError] = useState('Password can`t be empty');
  const [formValid, setFormValid] = useState(false)

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000);
}, [])

  useEffect(() => {
    if (loginError || passwdError) {
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [loginError, passwdError])


  const loginHandler = (e) => {
    setLogin(e.target.value)
    const re = /^(([^<>()[\]\,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginError('Incorrect email')
    }
    else {
      setLoginError('')
    }
  }

  const passwdHandler = (e) => {
    setPasswd(e.target.value)
    if (e.target.value.length < 8 || e.target.value.length > 20) {
      setPasswdError('min 8 max 20 symb')
    }
    else if (!e.target.value) {
      setPasswdError('Password can`t be empty')
    }
    else {
      setPasswdError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true)
        break
      case 'passwd':
        setPasswdDirty(true)
        break
    }
  }

  function handleSubmit(event) {
  }
  return (
    <div className='mainapp'>
      {loading ? 


<ClipLoader
color={'#38d39f'}
loading={loading}
size={150}
/>
          :

          <div className='flex-container'>
          <div className='content-container'>
            <form className='form-container' onSubmit={handleSubmit()}>
              <h1>Sign in</h1>
              {(loginDirty && loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
              <p className='subtitle'>Email</p>
              <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name='login' type='text' placeholder=''></input>
              {(passwdDirty && passwdError) && <div style={{ color: 'red' }}>{passwdError}</div>}
              <p className='subtitle'>Password</p>
              <input onChange={e => passwdHandler(e)} value={passwd} onBlur={e => blurHandler(e)} name='passwd' type='password' placeholder=''></input> <br></br>
              <button disabled={!formValid} type='submit'>Sign in</button>
            </form>
          </div>
        </div> 


      }


        
    </div>
  )
}

export default App; 