import React from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link"; 

export default function Time() {
  const [time, setTime] = React.useState("Загрузка времени сервера...");
  React.useEffect(()=>{
    fetch('api/getServerTime').then(data=>data.text()).then(data=>setTime(data));
  },[]);
  return (
    <div className={styles.container}>
      <p>{time}</p>
      <p>19вв2 Макаров Лобанов Сидоров</p>
      <Link href="/upload">Upload Page </Link>
      <Link href="/content">Content Page</Link>
    </div>
  )
}
