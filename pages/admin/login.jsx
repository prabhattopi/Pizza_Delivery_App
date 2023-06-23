import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../../styles/Login.module.css"
import { APIURL } from "../../apiUrl"

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    console.log(`${process.env.NEXT_PUBLIC_Base_URL}`)
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_Base_URL}/api/login`,
        {
          username,
          password,
        }
      )
      router.push("/admin")
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {error && <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  )
}

export default Login
