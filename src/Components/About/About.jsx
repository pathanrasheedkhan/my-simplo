/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './About.module.css'

export default function About() {
  return (
   //About
   <section className={styles.container} >
      <h2 className={styles.title}>ABOUT ME</h2>
      <div className={styles.about}>
        <img className={styles.img} src="/b5.jpg" alt="" />
        <div className={styles.para}>
          <p>My name is rasheed khan iam a developer seeking for job <br />
          thanks for openinig please give me upvote in github if you linke my protfolio</p>
          <div className={styles.at}>
          <a
                  rel="noreferrer"
                  target="_blank"
                
                  href="assets/resume.pdf"
                >
                  View Resume
                </a>

          </div>
          
        </div>
        
      </div>
      


   </section>
  )
}
