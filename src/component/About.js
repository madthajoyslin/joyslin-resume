import "../css/About.css";
// blue color is just a variable
import person from "../image/person.jpg";
function About() {
  return (
    <>
    
      <section className="about">
        <div class="details">
          <p className="t1"> I am</p>
          <p className="t2"> Joyslin  Madtha</p>
          <p className="desc">Student | Fresher | Frontend </p>
        </div>
        <div className="person">
          <img  src={person} width="100%" alt="person" class="photo joy" />
        </div>
      </section>
    </>
  );
}

export default About;
