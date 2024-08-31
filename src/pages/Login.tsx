import React, { useEffect } from 'react'
import logoImg from '../assets/mos2.png'
import classes from '../styles/login.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate= useNavigate(); 
    const emailRef= React.useRef<HTMLInputElement>(null) 
    const passRef = React.useRef<HTMLInputElement>(null) 
    const onSubmitHandler = async(e:React.FormEvent)=>{ 
        e.preventDefault();
        let  email=""; 
        let pass="";
        if(emailRef.current)
         email = emailRef.current.value;
        if(passRef.current)
         pass=passRef.current.value;
        const auth=getAuth(); 
        signInWithEmailAndPassword(auth,email,pass).then( cred=>{ 
            console.log(cred);
            navigate('/');
        })


    }
  return (
    <div className={classes.login}>
            <img src={logoImg}/>
            <form onSubmit={onSubmitHandler}> 
                <div> 
                    <label>البريد الالكتروني </label>
                    <input type='email' ref={emailRef} />
                </div>
                <div> 
                    <label>كلمة السر</label>
                    <input type='password' ref={passRef} />
                </div>
                <div> 
                    <button> 
                        تسجيل الدخول
                    </button>
                </div>
                <Link to='/register/logup'> 
                                    إنشاء حساب
                </Link>
            </form>
    </div>
  )
}

export default Login
