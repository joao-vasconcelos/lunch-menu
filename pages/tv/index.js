import styles from '../../styles/Tv.module.css';

import menu from '../../data/menu.json';
import Day from '../../components/day/Day';
import Image from 'next/image';

export default function Home() {
  //

  const filterMenu = menu.filter((item) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);

    return today.getTime() === itemDate.getTime() || tomorrow.getTime() === itemDate.getTime();
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={'/chefpoint-logo.svg'} width={400} height={100} alt={'Chef Point - Leading Food & Beverages Solutions'} />
        <p className={styles.message}>
          Full month available at <span>lunch.chefpoint.pt</span>
        </p>
      </div>
      <div className={styles.list}>
        {filterMenu.map((item, index) => (
          <Day key={index} content={item}></Day>
        ))}
      </div>
    </div>
  );
}