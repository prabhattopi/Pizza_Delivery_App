import React, { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const Feauterd = () => {
    const [index,setIndex]=useState(0)

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  return (
    <div className={styles.container}>
      <div className={index===0?styles.arrowContainer2:styles.arrowContainer} style={{ left: 0 }} onClick={()=>setIndex(index-1)}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>

      <div className={styles.wrapper} style={{transform:`translateX(${-5*index}vw)`}}>
        
          <div  className={styles.imgContainer}>
            <Image src={images[index]} alt="" layout="fill" objectFit="contain"  />
          </div>
        
      </div>
      <div
        className={index===images.length-1?styles.arrowContainer1:styles.arrowContainer}
        style={{ right: 0, transform: "rotate(180deg)" }}
      
        onClick={()=>setIndex(index+1)}
      >
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Feauterd;
