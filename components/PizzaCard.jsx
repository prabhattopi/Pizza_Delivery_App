import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/dist/client/image'
const PizzaCard = () => {
  return (
    <div className={styles.container}>
 <Image src="/img/pizza.png" alt="" width="500" height="500"/>
 <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, quae.</p>
    </div>
  )
}

export default PizzaCard