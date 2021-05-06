import Head from 'next/head'
import styles from '../styles/Home.module.css'

import ProductScrollBar from '../components/ProductScrollBar/ProductScrollBar'
import HistoryDiv from '../components/HistoryDiv/HistoryDiv'
import ShopDiv from '../components/ShopDiv/ShopDiv'
import {Text} from '@chakra-ui/react';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>vieille sardine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Text fontSize="50px" color="teal">
      vieille sardine
      </Text>
        <div>
          <b>Livraison offert à partir de 126 € d’achat en France métropolitaine, Belgique, Hollande</b>
        </div>
        <div>
          <img className={styles.img_homepage} src="/image_homepage.png"></img>
        </div>
        {/* <ProductScrollBar></ProductScrollBar> */}
        <HistoryDiv></HistoryDiv>
        <ShopDiv></ShopDiv>
      </main>
    </div>
  )
}
