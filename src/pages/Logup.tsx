import  React, { useEffect } from 'react'
import logoImg from '../assets/mos2.png'
import classes from '../styles/login.module.css'; 
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const Logup = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const navigate = useNavigate(); 
    const emailRef=  React.useRef<HTMLInputElement>(null)  
    const passRef =  React.useRef<HTMLInputElement>(null)  
    const confPassRef =  React.useRef<HTMLInputElement>(null) 
    const nameRef =  React.useRef<HTMLInputElement>(null)  
    const ageRef =  React.useRef<HTMLInputElement>(null)  

    const onSubmitHandler = (event:React.FormEvent)=>{ 
        event.preventDefault();
        let email=''; 
        let pass=''; 
        if(emailRef.current)
         email = emailRef.current.value;
        if(passRef.current)
         pass = passRef.current.value;
        // const confPass= confPassRef.current.value; 
        // const name = nameRef.current.value; 
        // const age = ageRef.current.value; 
        
        const auth = getAuth(); 
     createUserWithEmailAndPassword(auth,email,pass).then(cred =>{ 
        console.log(cred);
        navigate('/'); 
      })


    }
  return (
    <div className={classes.login}>
         <img src={logoImg}/>
            <form onSubmit={onSubmitHandler}> 
            <div> 
                    <label> الاسم الثلاثي</label>
                    <input type='text' ref={nameRef} />
                </div>
                <div> 
                    <label> العمر</label>
                    <input type='number' min='6' ref={ageRef} />
                </div>
                <div> 
                    <label>البريد الالكتروني </label>
                    <input type='email' ref={emailRef} />
                </div>
                <div> 
                    <label>كلمة السر</label>
                    <input type='password' ref={passRef} />
                </div>
                <div> 
                    <label>تأكيد كلمة السر</label>
                    <input type='password' ref={confPassRef} />
                </div>
                <div> 
                    <button> 
                        إنشاء حساب
                    </button>
                </div>
            </form>
    </div>
  )
}

export default Logup
