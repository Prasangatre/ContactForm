import { useState } from 'react'
import { db } from './firebase'
import './App.css'
import FormInput from './components/FormInput'
import React from 'react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

const App = () => {
  const [values, setValues] = useState({
    username: '',
    phone: '',
    address: '',
    gender: '',
  })

  const inputs = [
    {
      uid: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'Username should be 3-10 characters!',
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      uid: 2,
      name: 'phone',
      type: 'text',
      placeholder: 'Phone',
      errorMessage: 'Enter 10 digit valid number!',
      label: 'Phone',
      required: true,

      pattern: '[0-9]{10}',
    },
    {
      uid: 3,
      name: 'address',
      type: 'text',
      placeholder: 'Address',
      label: 'Address',
      errorMessage: 'Address should be 10 characters long!',
      required: true,
      pattern: '^[A-Za-z0-9]{10,18}$',
    },

    {
      uid: 4,
      type: 'text',
      name:'gender',
      placeholder: 'Gender',
      label: 'Gender',
      errorMessage: 'Gender to be specfied!',
      required: true,
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setDoc(doc(db, 'UsersData', 'UserInformation'), {
      username: values.username,
      address: values.address,
      phone: values.phone,
      gender: values.gender,
      timestamp: serverTimestamp(),
    }).then(() => alert('Successfully submited'))
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.uid}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
