import Head from 'next/head'
import styles from '../styles/index.module.css'
import React, { useEffect, useState } from 'react';

const calculateTimeLeft = () => {
  const difference = +new Date('Friday, April 21, 2023 18:30:00 GMT-07:00')- +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

export default function Home() {

  const [timeLeft, setTimeLeft] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={timeLeft.toString}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  }); 

  return (
    <div className={styles.container}>
      <Head>
        <title>🍀</title>
        <meta name="description" content="clover" />
      </Head>

      <info className={styles.info}> 
        <h1 className={styles.title}><span className={styles.titleText} style={{ 'backgroundColor': 'black' }}>🍀 <i>clover</i> 🍀</span></h1>
        <p className={styles.description}>{timerComponents.length ? timerComponents : ''}</p>
        <p className={styles.description}><a className={styles.italic} target='_blank' rel='noreferrer' href='https://www.instagram.com/cloverband_/'>@cloverband_</a></p>
      </info>

      <background className={styles.background}> 
        <video className={styles.video} loop muted playsInline autoPlay> 
          <source src="/2pKXeK.webm" type="video/webm"/>
          <source src="/2pKXeK.mp4" type="video/mp4"/>
        </video>
      </background>
    </div>
  )
}