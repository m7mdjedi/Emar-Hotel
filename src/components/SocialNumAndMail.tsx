
import { FaPhoneAlt } from "react-icons/fa";
import classes from '../styles/socialNumAndMail.module.css'
import { IoMdMail } from "react-icons/io";
const SocialNumAndMail = () => {
  return (
    <div className={classes.socialNumAndMail}>
      <div> 

    {/* mail */}
       
        <span> 
            m7mdjedi@gmail.com
        </span>
        <IoMdMail  className={classes.ma}/> 
      </div>
      <div> 
        {/* phone  */}

        <span> 
            963982993834+
        </span>
        <FaPhoneAlt className={classes.ph}/> 
      </div>
    </div>
  )
}

export default SocialNumAndMail
