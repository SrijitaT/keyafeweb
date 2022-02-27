import React,{useState} from 'react';
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


export default function SignInPage() {
  let [email,setEmail]= useState("");
  let [password,setPassword] = useState("");
  let handleSubmit = async event => {
    event.preventDefault();
  //write login logic
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" 
        handleChange={(e)=>setEmail(e.target.value)} value={email} 
        label="email" required/>
       <FormInput name="password" type="password" 
        handleChange={(e)=>setPassword(e.target.value)} value={password} 
        label="password" required/>
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}
