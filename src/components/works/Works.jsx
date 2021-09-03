import "./works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Work Experience",
      sub_title: "INNOVACCER - SDE INTERN",
      duration:'May 2021 - July 2021',
      desc:'Designed and developed Custom Desktop Notification Service of the product and published it as open-source npm packag .Implemented  customized behaviour of module using  ElectronJS Browser Window and made it dynamic and generic using IPC(Inter Process Communication) Module of ElectronJs.Enhanced user-experience for real-time notifications, did algorithmic optimizations to get smooth animation effects for multiple notifications.',
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Work Experience",
      sub_title: "REDEFINED CORP - FRONT-END DEVELOPER INTERN",
      duration:'Nov 2020 - Feb 2021',
      desc:'Worked on ReactJS , Redux ToolKit & SASS.Implemented UI components using ANTD & styled them using SASS. Created services for API integration & global state management using Redux toolkit.Enhanced user-experience and interactivity by adding dynamic routing using React Router and React Hooks.Modularized & optimized the code using lodash, did algorithmic optimizations in increasing robustness of data-driven components like filters ,modals & slots.',
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h1>{d.title}</h1>
                  <h3 className="title">{d.sub_title}</h3>
                  <h6 className="title">{d.duration}</h6>
                  <p className="description">{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
