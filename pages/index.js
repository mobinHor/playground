import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/news-chart'><a>News Chart</a></Link>
      <Link href='/tree-map'><a>Tree Map</a></Link>
      <Link href='/iran-map'><a>Iran Map</a></Link>
    </div>
  )
}
