
import styles from "../styles/Navbar.module.css"
import Link from "next/link";
import Image from "next/image"
import { useSelector } from "react-redux"
const Navbar = () => {
  const {quantity}=useSelector(state=>state.cart)
  return (
    <div className={styles.container}>
   <div className={styles.item}>
    <div className={styles.callButton}>
      <Image src="/img/telephone.png" alt="" width="32px" height="32px"/>
    </div>
    <div className={styles.texts}>
      <div className={styles.text}>Order Now</div>
      <div className={styles.text}>889 990 908</div>
    </div>
   </div>
   <div className={styles.item}>
    <ul className={styles.list}>
      <Link href="/">
      <li className={styles.listItem}>HomePage</li>
      </Link>
   
      <li className={styles.listItem}>Product</li>
  
      <li className={styles.listItem}>Menu</li>
      <Image src="/img/logo.png" alt="" width="160px" height="69px"/>
      <li className={styles.listItem}>Events</li>
      <li className={styles.listItem}>Blog</li>
      <li className={styles.listItem}>Contact</li>
    </ul>
   </div>
   <Link href="/Cart" passHref>
   <div className={styles.item}>
    <div className={styles.cart}>
    <i className={styles.fat||"fa fa-shopping-cart"} aria-hidden="true" style={{color:"white",fontSize:"25px",cursor:"pointer"}}/>
    <div className={styles.counter}>{quantity}</div>
    </div>
   </div>
   </Link>
    </div>
  )
}

export default Navbar