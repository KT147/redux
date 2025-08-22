import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth';
import { useRef } from 'react';

const Auth = () => {

  const emailRef = useRef()
  const passwordRef = useRef()

  const dispatch = useDispatch()

  function login(event) {
    event.preventDefault()
    
    if (emailRef.current.value === "email" && passwordRef.current.value === "password") {
      dispatch(authActions.login())
    }
    else {
      alert("Email: email, password: password")
    }
  }


  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={login}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input id='email' ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
