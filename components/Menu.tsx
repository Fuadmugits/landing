import Image from 'next/image';
import styles from './Menu.module.css';

const dishes = [
  {
    img: '/dish_duck.png',
    tag: 'Signature',
    title: 'Pan-Seared Duck Breast',
    price: 'Rp 485K',
    desc: 'Cherry reduction, foie gras torchon, microgreens, and gold leaf garnish on smoked black garlic purée.',
    tags: ['Main Course', "Chef's Choice"],
    delay: '0',
  },
  {
    img: '/dish_seafood.png',
    tag: 'Premium',
    title: 'Saffron Lobster Risotto',
    price: 'Rp 620K',
    desc: 'Butter-poached lobster tail, seared scallops, Oscietra caviar, aged Parmigiano, saffron broth.',
    tags: ['Seafood', 'Award Winner'],
    delay: '100',
  },
  {
    img: '/dish_dessert.png',
    tag: 'Dessert',
    title: 'Dark Chocolate Fondant',
    price: 'Rp 285K',
    desc: 'Valrhona 70% couverture, raspberry coulis, vanilla bean cream, edible gold leaf dusting.',
    tags: ['Dessert', 'Gluten-Free Option'],
    delay: '200',
  },
];

export default function Menu() {
  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <div className="section-header" data-aos="fade-up">
          <p className="section-eyebrow">Signature Dishes</p>
          <h2 className="section-title">Curated by Passion,<br /><em>Perfected by Craft</em></h2>
          <p className="section-subtitle">Each dish is a masterpiece — a celebration of seasonal ingredients and culinary artistry.</p>
        </div>
        <div className={styles.grid}>
          {dishes.map((d) => (
            <div key={d.title} className={styles.card} data-aos="fade-up" data-aos-delay={d.delay}>
              <div className={styles.imgWrapper}>
                <Image src={d.img} alt={d.title} fill className={styles.img} />
                <div className={styles.imgOverlay}>
                  <span className={styles.cardTag}>{d.tag}</span>
                </div>
              </div>
              <div className={styles.body}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{d.title}</h3>
                  <span className={styles.price}>{d.price}</span>
                </div>
                <p className={styles.desc}>{d.desc}</p>
                <div className={styles.tags}>
                  {d.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta} data-aos="fade-up">
          <a href="#reservation" className={styles.btnPrimary}>View Full Menu</a>
        </div>
      </div>
    </section>
  );
}
