import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, { useState } from 'react';
import formSchema from './formSchema';
import * as yup from 'yup';
import axios from 'axios'


const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  tos: false
}

const initialErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [users, setUsers] = useState([]);

  const change = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  const submit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers(users.concat(res.data))
        setFormValues(initialValues)
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  return (
    <div className="App">
      <Form initialValues={formValues} change={change} submit={submit} errors={formErrors}/>
      {users.map(obj => <div>
        <div>FirstName: {obj.firstName}</div>
        <div>LastName: {obj.lastName}</div>
        <div>Email: {obj.email}</div>
        <div>Password: {obj.password}</div>
      </div>)}
    </div>
  );
}

export default App;
