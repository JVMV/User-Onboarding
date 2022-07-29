import React from 'react';
import './Form.css';

export default function Form(props) {
    const {initialValues, submit, change, errors} = props

    const onChange = e => {
        const {name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
      }
    
      const disabled = e => {
        return !initialValues.firstName || !initialValues.lastName || !initialValues.email || !initialValues.password || !initialValues.tos ? true : false;
      }
    
      const onSubmit = e => {
        e.preventDefault();
        submit();
      }



    return (
        <div className='container'>
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
            <form onSubmit={onSubmit}>
                <label>FirstName
                    <input 
                        name='firstName' 
                        type='text' 
                        value={initialValues.firstName} 
                        onChange={onChange} 
                    />
                </label>
                <label>LastName
                    <input 
                        name='lastName' 
                        type='text' 
                        value={initialValues.lastName} 
                        onChange={onChange} 
                    />
                </label>
                <label>Email
                    <input 
                        name='email'
                        type='email'
                        value={initialValues.email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        name='password'
                        type='password'
                        value={initialValues.password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                        name='tos'
                        type='checkbox'
                        checked={initialValues.tos}
                        onChange={onChange}
                    />
                </label>
                <button 
                    id='submitBtn'
                    type='submit' 
                    value='Submit' 
                    disabled={disabled()}
                >Submit</button>
            </form>
        </div>
    )
}