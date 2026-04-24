import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.videoBg}>
        <video autoPlay muted loop playsInline className={styles.video}>
          <source src="/Restaurant_cinematic_realistic_202604240945.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content} data-aos="fade-up">
        <p className={`section-eyebrow section-eyebrow-light`}>The Experience</p>
        <h2 className="section-title">An Evening Unlike<br /><em>Any Other</em></h2>
        <p className={styles.desc}>
          From the moment you enter our doors, every detail has been considered.
          Our sommelier-curated wine list, bespoke cocktail programme, and
          live ambient jazz create an atmosphere of effortless luxury.
        </p>
        <a href="#reservation" className={styles.btn}>Begin Your Experience</a>
      </div>
    </section>
  );
}
