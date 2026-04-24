import styles from './Reviews.module.css';

const reviews = [
  {
    text: '"AURUM is not a restaurant — it is a theatre of the senses. The duck breast alone was worth flying from Singapore for. Absolutely transcendent."',
    name: 'Rachel Summers',
    role: 'Food Critic, The Straits Times',
    initials: 'RS',
    featured: false,
    delay: '0',
  },
  {
    text: '"A masterclass in restraint and precision. Chef Marco understands that luxury is not about excess — it is about perfection. One of the finest meals of my life."',
    name: 'Jean-Luc Moreau',
    role: 'Michelin Guide Inspector',
    initials: 'JL',
    featured: true,
    delay: '100',
  },
  {
    text: '"We celebrated our anniversary here and it exceeded every expectation. The service was impeccable, the atmosphere intimate, and every bite was poetry."',
    name: 'Amara & Priya Patel',
    role: 'Loyal Guests since 2017',
    initials: 'AP',
    featured: false,
    delay: '200',
  },
];

export default function Reviews() {
  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.container}>
        <div className="section-header" data-aos="fade-up">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title">Words From Our<br /><em>Cherished Guests</em></h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={`${styles.card} ${r.featured ? styles.featured : ''}`} data-aos="fade-up" data-aos-delay={r.delay}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.text}>{r.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
