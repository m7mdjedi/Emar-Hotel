import image from "../assets/hot19.jfif";
import classes from "../styles/aboutUs.module.css";

import schoolEntrance from "../assets/hot13.jfif";
import schoolEntrance2 from "../assets/hot15.jfif";
import schoolEntrance3 from "../assets/hot16.jfif";
import conferenceRoom from "../assets/hot17.jfif";
import mos10 from "../assets/hot14.jfif";

import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.aboutUs}>
      <div>
        <img src={image} />
        <div></div>
        <div>
          <h2> حول </h2>
          <p>من أفضل الفنادق في الوطن العربي وأكثرها فخامة.</p>
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <img src={mos10} />
          {/* <Video video={schoolVid} width="100%" height="600px" /> */}
          {/* <Slider/> */}
        </div>
        <div>
          <h2>لماذا نحن ؟</h2>
          <div>
            <p>نوفر الحجز دائما وفي أي وقت</p>
            <p>نوفر غرف فردية وعائلية</p>
            <p>أسعار مدروسة وخدمة دائمة</p>
            <p>صالات رياضية و مدينة للألعاب وصالات لحفلات</p>
            <p>مطاعم ومقاهي ومطاعم سريعة</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <img src={schoolEntrance} />
        </div>
        <div>
          <img src={schoolEntrance2} />
        </div>
        <div>
          <img src={schoolEntrance3} />
        </div>
      </div>
      <div>
        <div>
          <h3>1500</h3>
          <p>  عدد غرفنا</p>
        </div>
        <div>
          <h3>2000</h3>
          <p>عامل وعاملة</p>
        </div>
        <div>
          <h3>1058900</h3>
          <p> نزلائنا</p>
        </div>
      </div>
      <div>
        <div>
        <h3>رسالتنا</h3>
          <p>
              في ايمار نسعى دائما نحو التميز والتألق ، الالتزام والمسؤولية ، وتوفير الرفاهية والخدمة المميزة لنزلائنا لنكون علامة مميزة في سوريا والوطن العربي.
          </p>
        </div>
        <div>
          <img src={conferenceRoom} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
