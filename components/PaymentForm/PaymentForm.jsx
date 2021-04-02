import React from 'react'
import ControlledInput from '../ControlledInput/ControlledInput'

import styles from './PaymentForm.module.css'

class PaymentForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.name = this.props.name;
        this.state = {
            card_number:   "",
            card_owner:    "",
            expiry_date:   "",
            cvv:           ""
        }
        this.props.handleChange(this.name,this.state);
    }

    handleChange(name,value){
        this.setState(
            {[name]: value},
            ()=> this.props.handleChange(this.name,this.state));
    }

    render(){
        return(
            <div className={styles.paymentMethodDiv}>
                <table className={styles.detailsTable}>
                    <tr className={styles.detailsRows}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <p style={{fontWeight:"bold",paddingLeft:"1em"}}> Paiement </p>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                            <p style={{paddingLeft:"1em"}}> Carte de crédits </p>
                        </td>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                            <img className={styles.mdpaiement} src="/mdpaiement.jpg"></img>
                        </td>
                    </tr>
                    <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                        <label>
                            <p className={styles.inputArea}>
                                Numéro de carte
                                <br></br>
                                <ControlledInput name="card_number" type ="text" handleChange={this.handleChange}></ControlledInput>
                            </p>
                        </label>
                    </td>
                    <tr className={styles.detailsRows}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Titulaire de la carte
                                    <br></br>
                                    <ControlledInput name="card_owner" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Date d'expiration (MM/AA)
                                    <br></br>
                                    <ControlledInput name="expiry_date" type ="month" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                        <td style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    CVV
                                    <br></br>
                                    <ControlledInput name="cvv" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default PaymentForm