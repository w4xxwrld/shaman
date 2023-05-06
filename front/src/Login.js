import ClipLoader from "react-spinners/ClipLoader";
import React, { useState, useEffect } from 'react';
import './App.css';
import { Formik, Field, Form } from 'formik';
import * as yup from "yup";

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

  const FormSchema = yup.object().shape({
    passwd: yup
      .string()
      .min(8, 'Password must be 8 characters long')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol')
  });

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

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
          <h1>Sign Up</h1>
          <Formik
            initialValues={{
              login: '',
              passwd: '',
            }}
            validationSchema={FormSchema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >{({ errors }) => (
            <Form className='form-container'>
              <label htmlFor="login" className='subtitle'>Email</label>
              <Field
                id="login"
                name="login"
                placeholder="example@mail.com"
                type="email"
              />
            <br></br>
              <label htmlFor="passwd" className='subtitle'>Password</label>
              <Field
                id="passwd"
                name="passwd"
                placeholder="enter your password"
                type="password"
              />
              {errors.passwd && <p>{errors.passwd}</p>}
              <button type="submit">Submit</button>
            </Form>)}
          </Formik>
          </div>
        </div> 
      }
    </div>
  )
}

export default App; 