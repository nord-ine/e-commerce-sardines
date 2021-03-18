import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HistoryDiv from '../components/HistoryDiv/HistoryDiv'
import ShopDiv from '../components/ShopDiv/ShopDiv'
import ProductsOverview from '../components/ProductsOverview/ProductsOverview'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <b>Livraison offert à partir de 126 € d’achat en France métropolitaine, Belgique, Hollande</b>
        </div>
        <div>
          <img className={styles.img_homepage} src="/image_homepage.png"></img>
        </div>
        <HistoryDiv></HistoryDiv>
        <ShopDiv></ShopDiv>
      </main>
    </div>
  )
}
