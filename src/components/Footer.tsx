import classes from "../styles/home.module.css";

import { Link } from "react-router-dom";
import SocialContact from "./SocialContact";
const Footer = () => {
  return (
    <div>
      {/* <div className={classes.home_registeration}>
        <h2>الحجز و الاستعلام</h2>
        <div>
          <p>الرجاء تعبئة النموذج لبدء في عملية الحجز</p>
          <Link to="/register/login">
            <button>
              <FaArrowLeft />
              نموذج الحجز
            </button>
          </Link>
          <p>لديك أسئلة او استفسارات ؟ </p>
        </div>
      </div> */}
      <div className={classes.footer}>
        <div className={classes.footer_section}>
          <div className={classes.footer_left}>
            <div>
              <h3>روابط هامة </h3>
              <ul>
                <li>
                  {" "}
                  <Link to="/">الرئيسية</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/register/login">اتصل بنا</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/register/login">تسجيل الدخول</Link>{" "}
                </li>
              </ul>
            </div>
            <div>
              <h3>معلومات </h3>
              <ul>
                <li>
                  {" "}
                  <Link to="/aboutUs/aboutUsInShort">من نحن</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/leadership">مناهجنا </Link>{" "}
                </li>
       
              </ul>
            </div>
            <div>
              <h3>روابط سريعة </h3>
              <ul>
                <li>
                  {" "}
                  <Link to="/student/acadimics"> امتيازاتنا</Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/register/login">
                    انضم لنا
                  </Link>{" "}
                </li>
         
              </ul>
            </div>
          </div>
          <div className={classes.footer_right}>
            <div>
              {/* <img src={logoImg} /> */}
              <h1>ايمار Emar</h1>
              <p>حلب - الشيخ مقصود - شارع الثورة</p>
              <p>+963982993834</p>
            </div>
          </div>
        </div>
        <div className={classes.footer_section}>
          <SocialContact/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
