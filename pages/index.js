import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🍀</title>
        <meta name="description" content="clover" />
      </Head>

      <info className={styles.info}> 
        <h1 className={styles.title}>🍀 <i>clover</i> 🍀</h1>
        <p className={styles.description}>coming soon</p>
        <p className={styles.description}>ig: <a className={styles.italic} target='_blank' rel='noreferrer' href='https://www.instagram.com/cloverband_/'>@cloverband_</a></p>
      </info>

      <background className={styles.background}> 
        <video className={styles.video} loop muted playsInline autoPlay> 
          <source src="/2pKXeK.mp4" type="video/mp4"/>
        </video>
      </background>
    </div>
  )
}
