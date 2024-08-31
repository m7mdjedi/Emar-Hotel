import React, { useEffect, useState } from "react";
import buildingImg from "../assets/hot8.jfif";
import logoImg from "../assets/hot14.jfif";
import classes from "../styles/home.module.css";
import { useObserver } from "../hooks/useObserver";
import boxingImg from "../assets/hot2.jfif";
import Slider from "../components/Slider";
import TopBottomModal from "../components/TopBottomModal";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visible, setVisible] = useState(false);

  const ref = React.useRef<HTMLInputElement>(null);
  const ref1 = React.useRef<HTMLInputElement>(null);
  const ref2 = React.useRef<HTMLInputElement>(null);

  const isVisible2 = useObserver(ref2);
  const isVisible1 = useObserver(ref1);
  const isVisible = useObserver(ref) || visible;
  if (isVisible && !visible) {
    setVisible(true);
  }

  return (
    <div className={classes.home}>
      <div>
        <div className={classes.typewriter}>
          <h1> استمتع بعطلة مميزة معنا </h1>
        </div>
      </div>
      <TopBottomModal link="student/acadimics" text="احجز الآن" />
      {/* <Video video={shcoolVid} width="100%" height="100%" />  */}
      <Slider />

      <div className={classes.homeAboutUs}>
        <div ref={ref} dir="rtl" className={classes.homeAboutUsTextDiv}>
          <h1 className={`${isVisible ? classes.show : ""}`}>فندق و منتجع ايمار</h1>
          <p>
            أهلا وسهلا بك في فندق ومنتجع ايمار ! 
            في ايمار نسعى دائما نحو الأفضل وهمنا الوحيد هو توفير أفضل إقامة للنزلاء لدينا ، شكرا لثقتك بنا وتأكد بأنك ستقضي أجمل الأوقات وأكثرها سعادة ومتعة لدينا.
          </p>
        </div>
        <div className={classes.homeAboutUsImgDiv}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={logoImg} />
        </div>
      </div>
      <div className={classes.homeLocation}>
        <div ref={ref1} dir="rtl" className={classes.homeLocationTextDiv}>
          <h1 className={`${isVisible1 ? classes.show : ""}`}> </h1>
        </div>
        <div className={classes.homeLocationImgDev}>
          <img src={boxingImg} />
        </div>
      </div>
      <div className={classes.home_about_school}>
        <div ref={ref2} dir="rtl" className={classes.home_about_school_text}>
          <h1 className={`${isVisible2 ? classes.show : ""}`}>رسالتنا</h1>
          <p>
              في ايمار نسعى دائما نحو التميز والتألق ، الالتزام والمسؤولية ، وتوفير الرفاهية والخدمة المميزة لنزلائنا لنكون علامة مميزة في سوريا والوطن العربي.
          </p>
        </div>
        <div className={classes.home_about_school_img}>
          {/* <Video video={logoVid} width="100%" height="100%"/> */}
          <img src={buildingImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
