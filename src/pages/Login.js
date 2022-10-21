import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';




const Login = ({setUser}) => {
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log(name, email)
    if(!name || !email) return;
    setUser({name: name, email: email})
    navigate('/dashboard')
  }
  return (
   <section className='section'>
     <form 
     className='form'
     onSubmit={handleSubmit}>

    <div className='form-row'>
    <label className='form-label'>name</label>
   <input type='text'
   className='form-input'
   value={name}
   onChange={(e)=>{setName(e.target.value)}}
      required=''>
      </input>
   </div>
   <div className='form-row'>
   <label className='form-label'>Email</label>
   <input type='email'
   value={email}
   onChange={(e)=>{setEmail(e.target.value)}}
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
