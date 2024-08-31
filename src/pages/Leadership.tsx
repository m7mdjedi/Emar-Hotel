import image from "../assets/hot19.jfif";
import classes from "../styles/leadership.module.css";
import men1 from "../assets/hot2.jfif";
import men2 from '../assets/hot8.jfif'
import men3 from '../assets/hot17.jfif'
import men4 from '../assets/hot18.jfif'
import men5 from '../assets/hot20.jfif'
import men6 from '../assets/hot12.jfif'

import { useEffect } from "react";

const newLocal = "يوجد العديد من كراجات السيارات المتطورة التي تللبي احتيجات نزلائنا وتوفر... ";
const leadershipAr = [
  {
    id: 1,
    name:"مسابح داخلية وخارجية",
    position: "مسابح عائلية داخلية وخارجية ذات اطالات جميلة ...",
    image: men1,
  },
  {
    id: 2,
    name: "مطاعم و مقاهي ",
    position:"مطاعم ومقاهي بإدارة وأشراف أفضل الطباخين في العالم...",
    image: men2,
  },
  {
    id: 3,
    name: "غرف عائلية وفردية",
    position: " غرف عائلية وفردية متنوعة تتنوع من حيث عدد الأسرة والحمامات حسب الرغبة...",
    image: men3,
  },
  {
    id: 4,
    name: "صالات رياضية و يوغا",
    position: "تحتوي على أفضل الأجهزة والمعدات وبإشراف نخبة من المدربين ...",
    image: men4,
  },
  {
    id: 5,
    name: "كراجات متطورة للسيارات",
    position:newLocal ,
    image: men5,
  },
  {
    id: 6,
    name: "صالات ألعاب ويوغا",
    position: "العديد من صالات الألعاب المخصصة للأطفال ، صالات الألعاب العائلية ،وصالات يوغا ... ",
    image: men6,
  },

];

const Leadership = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className={classes.leadership}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> خدماتنا </h2>
          <p>
                نسعى دائما لتكون خدماتنا هي أكثر مما تتمنون
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

export default Leadership;
