import React from 'react'

import styles from './ScrollCard.module.css'

class ScrollCard extends React.Component {
    constructor(props){
        super(props);
        this.buyItem = this.buyItem.bind(this);
        this.name = this.props.name;
        this.reference = this.props.reference;
        this.price = this.props.price;
    }

    buyItem(){
        console.log("ITEM PRESSED");
    }

    render(){
        return(
            <div className={styles.mainDiv}>
                <img alt="product" className={styles.picture}></img>
                <p className={styles.productName}> {this.name} </p>
                <table style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                        <td className={styles.refCell}>
                            <p> {"Réf." + this.reference} </p>
                            <p> {"Type"} </p>
                        </td>
                        <td className={styles.priceCell}>
                            <p className={styles.priceTag}> {this.price+"$"} </p>
                        </td>
                        <td className={styles.buyCell}>
                            <button type="button" onClick={this.buyItem}>
                                <img src="\icon_sac.png"></img>
                            </button>
                                
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ScrollCard