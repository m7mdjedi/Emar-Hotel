import classes from '../styles/navBar2.module.css'
import { Link, NavLink } from 'react-router-dom'
import SocialContact from './SocialContact'
import SocialNumAndMail from './SocialNumAndMail'
import { useState } from 'react'

const NavBar2 = () => {
  const [dropMenuOpen, setDropMenuOpen] = useState(false);


  const dropIconClickHandler = () => {
    setDropMenuOpen(!dropMenuOpen);
  };
  return (
    <div className={classes.navBar2}>
      <div> 
            {/* logo */}
            Emar ايمار 
      </div>
   
      <div> 
        <div>
            {/* top     */}
          <div> 
          <SocialContact/>
          </div>
          <div> 
          <SocialNumAndMail/>
          </div>
        </div> 
        <div> 
            {/* bottom */} 
      <ul className={classes.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
              الرئيسية
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/aboutUs/aboutUsInShort"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
           حولنا
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/leadership"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
          خدماتنا
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="acceptingAndHelping"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
            غرفنا
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/student/acadimics"
            className={({ isActive }) =>
              isActive
                ? `${classes.navListItemActive} ${classes.navListItem}`
                : classes.navListItem
            }
          >
            الحجز والاستعلام
          </NavLink>
        </li>
        {/* <li className={classes.navListItem}>{t("English")}</li> */}
      </ul> 
        </div>
      </div>
      <div onClick={dropIconClickHandler} className={classes.navDropIcon}>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenFirst
              : classes.navDropIconSpan
          }`}
        ></span>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenSecond
              : classes.navDropIconSpan
          }`}
        ></span>
        <span
          className={`${
            dropMenuOpen
              ? classes.navDropIconSpanOpenThird
              : classes.navDropIconSpan
          }`}
        ></span>
        <ul
          className={`${
            dropMenuOpen ? classes.navDropListOpen : classes.navDropListClose
          } `}
        >
          <li>
            <Link className={classes.navDropListItem} to="/">
             الرئيسية
            </Link>
          </li>
          <li>
            <Link
              to="/aboutUs/aboutUsInShort"
              className={classes.navDropListItem}
            >
           حولنا
            </Link>
          </li>
          <li>
            <Link to="/student/acadimics" className={classes.navDropListItem}>
              الحجز والاستعلام
            </Link>
          </li>


          <li>
            <Link to="/leadership" className={classes.navDropListItem}>
              خدماتنا
            </Link>
          </li>
          <li>
            <Link to="/acceptingAndHelping" className={classes.navDropListItem}>
              غرفنا
            </Link>
          </li>
          {/* <li className={classes.navDropListItem}>{t("English")}</li> */}
        </ul>
      </div>
    </div>
  )
}

export default NavBar2
