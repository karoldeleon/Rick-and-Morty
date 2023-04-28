
import styles from './About.module.css';
import imagen from '../imagenfondo/WhatsApp Image 2023-04-26 at 2.16.19 PM.jpeg';
import htmlImg from "../imagenfondo/html.png"
import cssImg from '../imagenfondo/css.svg'
import javascriptImg from '../imagenfondo/javascript.png'
import redux from '../imagenfondo/redux.png'
import reactImg from '../imagenfondo/react.png'
const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]

export default function About() {
    return (
       <div className={styles.About} >
        <h1 className={styles.title} >About Me</h1>
        <h1 className={styles.subtitle}>Name:</h1>
        <h2 className={styles.subtitle1}>karol De Leon</h2>
        <h1 className={styles.subtitl2}>Carrer:</h1>
        <h1 className={styles.subtitle3}>Systems Engineering And Full Stack Developer</h1>
        <h1 className={styles.subtitl4}>Skills</h1>
        <img className={styles.image} src={imagen} alt="Imagen del Form" />
        <div>
        <ul className={styles.unorderedList}>
        {techSkills.map(skill => (
          <li className={styles.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
        ))}
      </ul>
      </div>
       </div>
    );
 }