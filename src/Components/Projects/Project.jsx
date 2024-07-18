/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Project.module.css';

export default function Project() {
  return (
   <><section className={styles.main}>
      <h2 className={styles.heading}>   PROJECTS</h2>
      <div className={styles.container}>
        <div className={styles.para}>
          <h2 className={styles.title}>Gemini</h2>
          <p>                    Developed a gemini Clone using React Vite. implement respomsive design to ensure compatibility across various devices;
          Integrated a basic API call to handle user queries effectively Utilized state management for efficient data handling and user interactio</p>
          <div className={styles.links}>
            <a className={styles.link} href="https://66827a3c86e1130096ea2348--glone.netlify.app/">Live Demo</a>
            <a className={styles.lin} href="https://github.com/pathanrasheedkhan/geminiClone" >Source code</a>
          </div>
        </div>
        <div className={styles.image}>
          <img className={styles.imgcontainer} src="./images/Google Ai Gemini.png" alt="" />

        </div>

      </div>
    </section><section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.para}>
            <h2 className={styles.title}>Cara e-commerse website</h2>
            <p> Developed a Responsive website using HTML, CSS, JavaScript.
                      a user-friendly interface for an enhanced shopping experience.
                          Created static pages including home, shop, blog, about and contact page
</p>
            <div className={styles.links}>
              <a className={styles.link} href=" https://roaring-malabi-356170.netlify.app">Live Demo</a>
              <a className={styles.lin} href="https://github.com/pathanrasheedkhan/e-commerse">Source code</a>
            </div>
          </div>
          <div className={styles.image}>
            <img className={styles.imgcontainer} src="./images/project.jpg" alt="" />

           </div>

        </div>
      </section>
      
 <section className={styles.main}>
   
    <div className={styles.container}>
        <div className={styles.para} >
             <h2 className={styles.title}>Protfolio</h2>
             Creating my protfolio using Ract Vite fully responsive in any device well animated in the with designs and colors
             and its my first profolio
             <div className={styles.links}>
             <a  className={styles.link} href="https://rasheedkhan.netlify.app/">Live Demo</a>
             <a  className={styles.lin} href="https://github.com/pathanrasheedkhan/Protfolio">Source code</a>
             </div>
        </div>
        <div className={styles.image}>
          <img className={styles.imgcontainer} src="./images/project.jpg" alt="" />

        </div>
        
    </div>
   </section>



   
   
   
   
   </>   

   
  );
}
