import React from 'react'
const handleSubmit=(e)=>{
  e.preventDefault();
}


const Login = () => {
  return (
   <section className='section'>
     <form 
     className='form'
     onSubmit={handleSubmit}>
   <div className='form-row'>
    <label className='form-label'>name</label>
   <input type='text'
   className='form-input'
      required=''>
      </input>
   </div>
   <div className='form-row'>
   <input type='text'
      required=''
      className='form-input'>
      </input>
   </div>
   <button className='btn' type='submit'>Login</button>
    </form>
   </section>
  )
}

export default Login
