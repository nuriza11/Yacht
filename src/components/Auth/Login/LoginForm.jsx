import { Button, TextField } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../../contexts/AuthContext';
import classes from '../Register/Register.module.css';
import * as Yup from "yup";
import TextError from '../TextError';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
export default function LoginForm() {

  const { loginUser, loginUserData } = useContext(authContext);

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Обязательное поле!").email('Неверный формат email!'),
    password: Yup.string().required("Обязательное поле!").min(8, 'Требуется как минимум 8 символов!'),
    });

 

  const history = useHistory();

  const onSubmit = (values, actions) => {
    const { email, password } = values;
    loginUserData(email);
    let results = loginUser.filter((item) =>{

        return item.email === email && item.password === password
    })

    actions.resetForm();
    if(results.length){
      toast.dark(`Вы вошли в систему как ${email}!`)
      history.push("/")
    }else{
      toast.error('Неверные данные или несуществующий юзер!')
     
    }
    let admin = {
      email: "admin@mail.ru",
      password: "123456789"
    }

    if(admin.email === email && admin.password===password){
      history.push("/admin")
    }else{
      history.push('/')
    }
  }

  return (
    <div>
      <ToastContainer/>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className={classes.form}>

          <h1>
            Login
          </h1>

            <div style={{marginBottom: 30}}>
              <Field
                type="email" 
                name="email" 
                fullWidth={true} 
                variant="outlined"
                placeholder="Email"
                as={TextField}
              />
              
              <ErrorMessage component={TextError} name="email" />
            </div>
            
            <div 
              style={{marginBottom: 30}}
            >
              <Field
                type="password" 
                name="password" 
                fullWidth={true} 
                variant="outlined"
                placeholder="Password"
                as={TextField}
              />

              <ErrorMessage component={TextError} name="password" />

            </div>

            <Button type="submit" color="primary" variant="contained">  
              Login
                </Button>

          </Form>
        )}
      </Formik>

    </div>
  )
}