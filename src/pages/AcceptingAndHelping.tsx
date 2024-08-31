import image from "../assets/hot21.jfif";
import classes from "../styles/leadership.module.css";
import men1 from "../assets/hot22.jfif";
import men2 from '../assets/hot23.jfif'
import men3 from '../assets/hot24.jfif'
import men4 from '../assets/hot25.jfif'
import men5 from '../assets/hot26.jfif'
import men6 from '../assets/hot27.jfif'

import { useEffect } from "react";

const newLocal = "يوجد العديد من كراجات السيارات المتطورة التي تللبي احتيجات نزلائنا وتوفر... ";
const leadershipAr = [
  {
    id: 1,
    name:"غرفة لشخصين",
    position: " يوجد فيها سريرين وحمامين وتغطي احتجات شخصين... ",
    image: men1,
  },
  {
    id: 2,
    name: "غرفة لشخص",
    position:"تخدم شخص واحد وتعتبر أقل الغرف سعرا...",
    image: men2,
  },
  {
    id: 3,
    name: "غرفة ديلوكس",
    position: "تحوي على سرير كبير و غرفة استقبال وحمامين و...",
    image: men3,
  },
  {
    id: 4,
    name: "غرفة سوبر ديلوكس",
    position: "تطل مباشرة على المسبح وتحوي على سرير و...",
    image: men4,
  },
  {
    id: 5,
    name: "غرفة لأربع أشخاص",
    position:"يوجد فيها أربعة أسرة وحمامين وأربع خزن ..." ,
    image: men5,
  },
  {
    id: 6,
    name:"غرفة سوبر سوبر ديلوكس",
    position: "فتوحة على الشاطئ وتحوي على سريرن وحمامين وغيرها...",
    image: men6,
  },

];

const AcceptingAndHelping = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.leadership}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> غرفنا </h2>
          <p>
              اكتشف غرفنا لتجد الأفضل 
            </p>
        </div>
      </div>
  

      <div>
        {leadershipAr.map((ele) => (
          <div>
            <div>
              <img src={ele.image} />
            </div>
            <div>
              <h3>{ele.name}</h3>
              <p>{ele.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptingAndHelping;
