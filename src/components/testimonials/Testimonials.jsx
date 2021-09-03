import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Languages",
      img1: "assets/html.png",
      img2: "assets/javascript.png",
      img3: "assets/cpp.png",
      skills:['Javascript','HTML', 'C++/C', 'Java', 'Python']
    },
    {
      id: 2,
      name: "Martin Harold",
      title: "Databases/Technologies",
      img1: "assets/blockchain.png",
      img2: "assets/database.png",
      img3: "assets/ml.png",
      skills:['MongoDB(NoSQL)' ,'MySQL(SQL)','Blockchain(Basic)', 'Machine Learning(Basic)','DeepLearning(Basic)' ],
      featured: true,
    },
    {
      id: 3,
      name: "Alex Kalinski",
      title: "Libraries/Framework",
      img1: "assets/electron.png",
      img2: "assets/react.png",
      img3: "assets/node.jpg",
      skills:['ReactJs', 'ElectronJs', 'NodeJs', 'Redux', 'SASS']
       
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">

        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src={d.img1} className="left" alt="" />
              <img className="user" src={d.img2} alt="" />
              <img className="right" src={d.img3} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.title}</h3>
            </div>
            <div className="center">
              {d.skills.map((skill)=>(
              <li class="skills">{skill}</li>)
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
