/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <>

<section className={styles.contact}>
    <div className={styles.cont}>
      <h2 className={styles.decrpt}>Contact</h2>
      <div className={styles.combo}>
      <p className={styles.action}>[Put your call to action]</p>

      </div>
      <div className={styles.btn}>
      <a className={styles.link} href="rasheedkhan184@gmail.com">Call to Action</a>

      </div>

     
    </div>
   
   
   </section>
   <div className={styles.footer}>
    <div className={styles.links}>
      
    <a  className={styles.logo} href="mail to: @emapleyourmail"><img src="./images/emailIcon.png" alt="" /></a>
    <a className={styles.logo} href="@your linkedin profile"><img src="./images/linkedinIcon.png" alt="" /></a>
    <a  className={styles.logo}href="https://github.com/pathanrasheedkhan"> <img src="./images/githubIcon.png" alt="" /></a>
    </div>
   </div>

  


   
    </>
  )
}
