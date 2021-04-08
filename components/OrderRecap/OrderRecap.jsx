import React from 'react'

import styles from './OrderRecap.module.css'

class OrderRecap extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.mainDiv}>
                <table style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                        <td style={{width:"100%"}}>
                            <p className={styles.title}> Récapitulatif </p>
                            <hr></hr>
                        </td>
                    </tr>
                    <tr style={{width:"100%"}}>
                        <td style={{width:"100%"}}>
                            <br></br>
                            <p style={{fontWeight:"bold",marginLeft:"1em"}}> TOTAL: </p>
                            <p style={{fontWeight:"bold",marginLeft:"1em"}}> Livraison </p>
                            <p style={{marginLeft:"1em"}}> Remises </p>
                            <br></br>
                            <hr></hr>
                        </td>
                        <td style={{width:"100%"}}>
                            <br></br>
                            <p> ??? </p>
                            <p> ??? </p>
                            <p> ??? </p>
                            <br></br>
                            <hr></hr>
                        </td>
                    </tr>
                    <tr style={{width:"100%"}}>
                        <td style={{width:"100%"}}>
                            <p style={{fontWeight:"bold",margin:"1em"}}> TOTAL A PAYER: </p>
                        </td>
                        <td style={{width:"100%"}}>
                            <p> ??? </p>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default OrderRecap;