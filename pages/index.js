import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Feauterd from "../components/Feauterd";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home({pizzalist}) {

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />

        <title>Pizza Restaurant NearBy</title>
        <meta name="description" content="Lazwab Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feauterd />
      <PizzaList pizzalist={pizzalist}/>
    </div>
  );
}


export const getServerSideProps=async()=>{
  const response=await axios.get("http://localhost:3000/api/products")

  return {
    props:{
      pizzalist:response.data
    }
  }

}