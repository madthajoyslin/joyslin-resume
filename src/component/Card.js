
function Card({SkillsP}) {
 
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
      <div className="section-child">
        <div className="service">
        <i className="fa-solid fa-school icons"></i>
       <h2>{SkillsP.h}</h2>
       <p>{SkillsP.p}</p>
       <p>{SkillsP.t}</p>
       </div>
       </div>
       </div>
      </>
    );
  }
  
  export default Card;