
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
const Navbar = () => {
  return (
    <div className={styles.container}>
   <div className={styles.item}>
    <div className={styles.callButton}>
      <Image src="/img/telephone.png" alt="" width="32" height="32"/>
    </div>
    <div className={styles.texts}>
      <div className={styles.text}>Order Now</div>
      <div className={styles.text}>889 990 908</div>
    </div>
   </div>
   <div className={styles.item}>
    <ul className={styles.list}>
      <li className={styles.listItem}>HomePage</li>
      <li className={styles.listItem}>Product</li>
      <li className={styles.listItem}>Menu</li>
      <Image src="/img/logo.png" alt="" width="160px" height="69px"/>
      <li className={styles.listItem}>Events</li>
      <li className={styles.listItem}>Blog</li>
      <li className={styles.listItem}>Contact</li>
    </ul>
   </div>
   <div className={styles.item}>
    <div>
    <Image src="/img/logo.png" alt="" width="160px" height="69px"/>
    </div>
   </div>

    </div>
  )
}

export default Navbar