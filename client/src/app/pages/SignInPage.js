import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { useAuth } from '../contexts/firebase/auth.context';

import styles from './SignInPage.module.scss';
const SignInPage = ({children}) => {
  const history = useHistory();
  const [signInForm, setSignInForm] = useState({
    txtEmail: '',
    txtPassword: ''
  });
  const {currentUser,signInWithEmailAndPassword,signOut} = useAuth();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const result = await signInWithEmailAndPassword(signInForm.txtEmail, signInForm.txtPassword);
    if (result) {
      history.push("/");
    }    
  }

  const handleInputChange = async (ev) => {
    setSignInForm({
      ...signInForm,
      [ev.target.name]: ev.target.value
    })
  };

  return (
    
    <div className = {styles.login}>
      <div className = 'container'>
       
        {!!currentUser === false &&
        <form className = {styles.login__form} onSubmit={(ev) => handleSubmit(ev)}>
           <h1>LOGIN</h1>
          <div className = {styles.login__form__group}>
            <label htmlFor="txtEmail">Email address</label>
            <input type="email" className="form-control" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className = {styles.login__form__group}>
            <label htmlFor="txtPassword">Password</label>
            <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
          </div>
          <button type="submit" className="btn btn-primary">Sign In</button>
        </form>
        }
        {/* {!!currentUser === true && 
          
            
            <button onClick={() => signOut()}>Sign out</button>
          
        } */}
      </div>

    </div>

  );
};

export default SignInPage;