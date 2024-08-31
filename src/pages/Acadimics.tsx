
import image from "../assets/hot27.jfif";
import classes from "../styles/acadimics.module.css";
import  React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Acadimics = () => {
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
    <div className={classes.acadimics}>
      <div>
        <img src={image} />
        <div></div>
  
      </div>

      <div >
        <div>
          <img src={image} />
        </div>
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
    </div>
  );
};

export default Acadimics;
