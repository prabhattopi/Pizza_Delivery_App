import React from 'react'
import styles from "../styles/Cart.module.css"
import Image from "next/image"


const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Product</th>
                    <th>Product</th>
                    <th>Product</th>
                    <th>Product</th>
                    <th>Product</th>
                </tr>
            </table>
            
        </div>
        <div className={styles.right}>

        </div>
    </div>
  )
}

export default Cart