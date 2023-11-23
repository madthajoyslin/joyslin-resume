import "../css/Skills.css";
import c from "../image/c.svg";
import cc from "../image/cc.svg";
import css from "../image/css.svg";
import html from "../image/html.svg";
import java from "../image/java.svg";
import javascript from "../image/javascript.svg";
import mysql from "../image/mysql.svg";
import python from "../image/python.svg";
function Skills() {
  return (
    <>
      <section className="quote">
        <div className="overlay">
          <div className="quote-area">
            <input
              className="inp-email"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn"> Sign in</button>
          </div>
        </div>
      </section>
      <section className="skills">
        <h1 className="section-title">My skills</h1>
        <div className="images">
          <img src={c} alt="c" class="photo" />
          <img src={cc} alt="cc" class="photo" />
          <img src={css} alt="css" class="photo" />
          <img src={html} alt="html" class="photo" />
          <img src={java} alt="java" class="photo" />
          <img src={javascript} alt="javascript" class="photo" />
          <img src={mysql} alt="mysql" class="photo" />
          <img src={python} alt="python" class="photo" />
        </div>
      </section>
    </>
  );
}
export default Skills;
