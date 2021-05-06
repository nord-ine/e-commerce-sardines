import React from 'react'
import Link from 'next/link'
import styles from './HistoryDiv.module.css'

const HistoryDiv = () => {
    return (
        <div className={styles.wrapper}>
            <Link  href="/History">
            <a>
                <div className={styles.left_div}>
                    <img className={styles.img_port} src="/image_port.png"></img>
                </div>
                <div className={styles.right_div}>
                    <h3 className={styles.h3}><b>NOTRE HISTOIRE</b></h3>
                    <p className={styles.text}>Découvrez la longue histoire de notre sardinnerie et de son savoir faire...</p>
                </div>
            </a>
            </Link>
        </div>
    )
}

export default HistoryDiv
