import classes from "../styles/socialContact.module.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiGithubLogoFill } from "react-icons/pi";
// import { FaLinkedinIn } from "react-icons/fa";
// import { PiGithubLogoFill } from "react-icons/pi";
const SocialContact = () => {
  return (
    <div className={classes.socialContact}>
      <a className={classes.yo}> 
        <FaYoutube  size={20}/>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100081646656010" target="_blank" className={classes.fa}> 
        <FaFacebookF size={20}/>
      </a>
      {/* <a href="https://www.linkedin.com/in/mohammad-aljedi-8a67891b2/" target="_blank" className={classes.tw}>
        <FaXTwitter size={25}/>
      </a> */}
      <a href="https://www.linkedin.com/in/mohammad-aljedi-8a67891b2/" target="_blank" className={classes.li}>
        <FaLinkedinIn size={20}/>
      </a>
      <a href="https://github.com/m7mdjedi" target="_blank" className={classes.gi}>
        <PiGithubLogoFill size={20}/>
      </a>
      <a className={classes.wh}>
        <IoLogoWhatsapp size={20}/>
      </a>
    </div>
  );
};

export default SocialContact;
