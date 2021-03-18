import React from 'react'

import styles from './ShopDiv.module.css'

const ShopDiv = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left_div}>
                <img className={styles.img_port} src="/image_france.png"></img>
            </div>
            <div className={styles.right_div}>
                <h3 className={styles.h3}><b>NOS BOUTIQUES</b></h3>
                <p className={styles.text}>
                    Avec 52 boutiques de vente directs dans tous les régions de France et en Belgique.<br></br>Trouvez les boutique plus proche que vous!
                </p>
            </div>
        </div>
    )
}

export default ShopDiv
