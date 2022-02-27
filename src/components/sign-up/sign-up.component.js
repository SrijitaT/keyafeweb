import React,{useState} from 'react';
import "./sign-up.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


export default function SignUpPage() {
  let [dispName,setDispName] = useState("");
  let [password,setPassword] = useState("");
  let [cpassword,setCPassword] = useState("");
  let [email,setEmail] = useState("");
  let handleSubmit = async event => {
    event.preventDefault();
    if(password !== cpassword){
        alert("Passwords dont match")
        return;
    }
   //write reg logic
    setDispName("");
    setPassword("");
    setCPassword("");
    setEmail("");
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput name="displayName" type="text" 
        handleChange={(e)=>setDispName(e.target.value)} value={dispName} 
        label="Display Name" required/>
        <FormInput name="email" type="email" 
        handleChange={(e)=>setEmail(e.target.value)} value={email} 
        label="email" required/>
       <FormInput name="password" type="password" 
        handleChange={(e)=>setPassword(e.target.value)} value={password} 
        label="password" required/>
        <FormInput name="cpassword" type="cpassword" 
        handleChange={(e)=>setCPassword(e.target.value)} value={cpassword} 
        label="Confirm Password" required/>
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  )
}
