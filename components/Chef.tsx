import Image from 'next/image';
import styles from './Chef.module.css';

const achievements = [
  { icon: '★', title: '3 Michelin Stars', subtitle: 'Consecutive since 2018' },
  { icon: '◈', title: "Asia's 50 Best", subtitle: 'Top 10 – 2022 & 2023' },
  { icon: '◆', title: 'James Beard Award', subtitle: 'Outstanding Chef – 2021' },
];

export default function Chef() {
  return (
    <section className={styles.chef} id="chef">
      <div className={styles.container}>
        <div className={styles.visual} data-aos="fade-right">
          <div className={styles.frame}>
            <Image src="/chef.png" alt="Chef Marco Aurellio" fill className={styles.img} />
            <div className={styles.imgAccent} />
          </div>
        </div>
        <div className={styles.content} data-aos="fade-left">
          <p className="section-eyebrow">Meet The Visionary</p>
          <h2 className="section-title">Chef Marco<br /><em>Aurellio</em></h2>
          <p className={styles.bio}>
            With over two decades sculpting menus across Paris, Tokyo, and New York,
            Chef Marco Aurellio returned to his roots to create something singular —
            a restaurant that bridges Indonesian heritage with world-class technique.
          </p>
          <p className={styles.bio}>
            A graduate of Le Cordon Bleu Paris and alumnus of three Michelin-starred kitchens,
            his philosophy is simple: let the ingredient lead, and let the craft follow.
          </p>
          <div className={styles.achievements}>
            {achievements.map((a) => (
              <div key={a.title} className={styles.achievement}>
                <span className={styles.icon}>{a.icon}</span>
                <div>
                  <strong>{a.title}</strong>
                  <span>{a.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
