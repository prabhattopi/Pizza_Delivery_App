import React from 'react'
import styles from "../styles/PizzaCard.module.css"
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
      <Image src={pizza.img} alt="" width="500" height="500"/>
      </Link>

 <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default PizzaCard