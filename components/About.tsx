import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text} data-aos="fade-right">
          <p className="section-eyebrow">Our Philosophy</p>
          <h2 className="section-title">
            A Sanctuary of<br /><em>Culinary Art</em>
          </h2>
          <p className={styles.desc}>
            At AURUM, dining is not merely sustenance — it is an immersive experience.
            Each plate is a canvas painted with precision, passion, and the finest locally sourced ingredients.
            Our kitchen operates on the belief that extraordinary food is born from extraordinary dedication.
          </p>
          <p className={styles.desc}>
            Nestled in the heart of Jakarta, our intimate dining room seats just 40 guests per evening,
            ensuring a personal and unhurried experience that honours both our craft and your time.
          </p>
          <div className={styles.signature}>
            <div className={styles.sigLine} />
            <div>
              <span className={styles.sigName}>Chef Marco Aurellio</span>
              <span className={styles.sigRole}>Executive Chef &amp; Founder</span>
            </div>
          </div>
        </div>
        <div className={styles.visual} data-aos="fade-left">
          <div className={styles.frame}>
            <div className={`${styles.accent} ${styles.topLeft}`} />
            <div className={`${styles.accent} ${styles.bottomRight}`} />
            <Image src="/chef.png" alt="Executive Chef Marco Aurellio" fill className={styles.img} />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeYear}>2006</span>
            <span className={styles.badgeText}>Est.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
