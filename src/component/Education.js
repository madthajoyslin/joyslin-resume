import "../css/Education.css";
// import Card from "./Card";
function Education() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="services">
        <h1 className="section-title"> Education</h1>
        <div className="section-child">
          <div className="service">
            <i className="fa-solid fa-school icons"></i>
            <h2>schooling</h2>
            <p>I did my schooling in Agrar.</p>
            <p>The school days were memorable with lot of friends</p>
            {/* <button className="service-btn"> view more</button> */}
          </div>
          <div className="service">
            <i className="fas fa-university icons"></i>
            <h2>Preuniversity</h2>
            <p>I did my college in modankap.</p>
            <p>I was in the physics, chemistry and computer science department</p>
            {/* <button className="service-btn"> view more</button> */}
          </div>
          <div className="service">
            <i className="fa-solid fa-graduation-cap icons"></i>
            <h2>Graduation</h2>
            <p>I am pursuing my graduation in Canara Engineering College.</p>
            <p>In the department of Computer Science & Engineering</p>
            {/* <button className="service-btn"> view more</button> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
// import "../css/Education.css";
// import Card from "./Card";
// export default function Education(){
 
//   const SkillsP=[{
//     id:1,
//     h:'Schooling',
//     p:'I did my schooling in Agrar till 10th,  i secured 95.84%.',
//     t:'The school days were memorable with lot of friends.'
//   },
//   {
//     id:2,
//     h:'Preuniversity',
//     p:'I did my Preuniversity in Modankap. The core subjects were Physics, Chemistry, Mathematics & Computer Science',
//     t:'In the board exams i scored 89.58%.'
//   },
//   {
//     id:3,
//     h:'Graduation',
//     p:'I am pursuing my graduation in Canara Engineering College.In the department of Computer Science & Engineering',
//     t:'In the department of Computer Science & Engineering'
//   }
//   ];
//   return(
//     <>
//     <h1 className="section-title"> Education</h1>
//     <div className="props">
//     {
//       SkillsP.map((item)=>(<Card SkillsP={item}/>))
//     } 
//     </div>
//     </>
//   );
//   }
