import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href='/news-chart'><a>News Chart</a></Link>
      <Link href='/tree-map'><a>Tree Map</a></Link>
      <Link href='/iran-map'><a>Iran Map</a></Link>
      <Link href='/react-hook-form'><a>React HookForm</a></Link>
      <Link href='/apex-chart'><a>Apex Chart</a></Link>
      <Link href='/axios-abort'><a>Axios Abort</a></Link>
    </div>
  )
}
