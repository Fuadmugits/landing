import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.logo}>AURUM</span>
          <p className={styles.tagline}>Where Every Dish Tells a Story</p>
          <div className={styles.social}>
            {['IG','FB','TW'].map((s) => (
              <a key={s} href="#" className={styles.socialLink} aria-label={s}>{s}</a>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <h4>Navigate</h4>
            <ul>
              {[['#about','About Us'],['#menu','Our Menu'],['#chef','Meet The Chef'],['#reviews','Testimonials']].map(([href,label]) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Visit</h4>
            <ul>
              <li>Jl. Sudirman No. 1</li>
              <li>SCBD, Jakarta Selatan</li>
              <li>+62 21 5050 8888</li>
              <li>hello@aurum.id</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Hours</h4>
            <ul>
              <li>Tuesday – Sunday</li>
              <li>6:00 PM – 11:00 PM</li>
              <li>&nbsp;</li>
              <li>Monday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© 2024 AURUM Fine Dining. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
