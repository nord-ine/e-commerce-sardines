import React from 'react'

import styles from './ProductScrollBar.module.css'
import ScrollCard from '../ScrollCard/ScrollCard'

class ProductScrollBar extends React.Component {
    constructor(props){
        super(props);
        this.handleRightScroll = this.handleRightScroll.bind(this);
        this.handleLeftScroll = this.handleLeftScroll.bind(this);
    }

    handleLeftScroll(){
        console.log("LEFT SCROLL PRESSED")
    }


    handleRightScroll(){
        console.log("RIGHT SCROLL PRESSED")
    }

    render(){
        return(
            <div style={{width:"100%"}}>
                <div className={styles.mainDiv}>
                    <p className={styles.title}> NOS PRODUITS</p>
                    <table style={{width:"100%"}}>
                        <tr style={{width:"100%"}}>
                            <td style={{width:"5%"}} >
                                <button type="button" onClick={this.handleLeftScroll}>
                                    <img src="\left_polygon.png"></img>
                                </button>
                            </td>
                            <td className={styles.cardCell}>
                                <ScrollCard name="Produit 1" reference="0000" price="X"></ScrollCard>
                            </td>
                            <td className={styles.cardCell}>
                                <ScrollCard name="Produit 2" reference="0001" price="X"></ScrollCard>
                            </td>
                            <td className={styles.cardCell}>
                                <ScrollCard name="Produit 3" reference="0002" price="X"></ScrollCard>
                            </td>
                            <td style={{width:"10%"}}>
                                <button type="button" onClick={this.handleRightScroll}>
                                    <img src="\right_polygon.png"></img>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        ) 
    }
}

export default ProductScrollBar