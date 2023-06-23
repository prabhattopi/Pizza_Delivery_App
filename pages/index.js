import axios from "axios"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Add from "../components/Add"
import AddButton from "../components/AddButton"
import Feauterd from "../components/Feauterd"
import PizzaList from "../components/PizzaList"
import styles from "../styles/Home.module.css"
import { APIURL } from "../apiUrl"

export default function Home({ pizzalist, admin }) {
  const [close, setClose] = useState(true)

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <title>Pizza Restaurant NearBy</title>
        <meta name="description" content="Lazwab Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feauterd />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzalist={pizzalist} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ""
  let admin = false
  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }

  const response = await axios.get(`${APIURL}/api/products`)

  return {
    props: {
      pizzalist: response.data,
      admin,
    },
  }
}
