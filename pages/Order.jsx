import React from 'react'

import styles from '../styles/Order.module.css'

class Order extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const produts = [{id:'0001',nb:'3'},{id:'0002',nb:'3'}];
        const content = produts.map(product => ProductOverview(product));

        return(
            <div style={{width:"80%",margin:"auto"}}>
                <p className={styles.title}> RESUME DE LA COMMANDE #X </p>
                {content}
                <p className={styles.subtitle}> RECAPITULATIF</p>
                <div className={styles.detailsDiv}>
                    <table style={{width:"100%"}}>
                        <tr style={{width:"100%"}}>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p> Numéro de la commande:</p>
                            </td>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p className={styles.details}> XXXX </p>
                            </td>
                        </tr>
                        <tr style={{width:"100%"}}>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p> Nombre total d'article:</p>
                            </td>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p className={styles.details}> XXXX </p>
                            </td>
                        </tr>
                        <tr style={{width:"100%"}}>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p> Remise:</p>
                            </td>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p className={styles.details}> XXXX </p>
                            </td>
                        </tr>
                        <tr style={{width:"100%"}}>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p> Frais de livraison:</p>
                            </td>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p className={styles.details}> XXXX </p>
                            </td>
                        </tr>
                        <tr style={{width:"100%"}}>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p> Coût total:</p>
                            </td>
                            <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                                <p className={styles.details}> XXXX </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

const ProductOverview = (props) =>{
    return(
        <div className={styles.productDiv}>
            <table style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> Référence: <b> {props.id} </b></p>
                        </td>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> Quantité <b> {props.nb} </b></p>
                        </td>
                    </tr>
                </table>
        </div>
    )
}

export default Order