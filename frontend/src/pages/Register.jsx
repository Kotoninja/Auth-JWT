import React from 'react'
import Form from '../components/Form';

const Register = () => {
  return (
    <>
      <Form route="api/user/registration/" method={"Registration"} />
    </>
  )
}

export default Register;