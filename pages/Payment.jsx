import React from 'react'
import AdressForm from '../components/AdressForm/AdressForm'
import PathnameDiv from '../components/PathnameDiv/PathnameDiv'
import PaymentForm from '../components/PaymentForm/PaymentForm'

import styles from '../styles/Payment.module.css'

class Payment extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBillingAdress = this.handleBillingAdress.bind(this);
        this.state = {
            deliveryAdress :    {},
            billingAdress:      {},
            creditCard:         {},
            billingStatus:      false
        };
    }

    handleChange(name,value){
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    handleBillingAdress(e){
        try{
            if(e.target.value=="new_adress"){
                this.setState({
                    ['billingStatus']: true
                })
            }
            else{
                let tmp = this.state.deliveryAdress;
                this.setState({
                    ['billingStatus']: false,
                    ['billingAdress']: tmp
                })
            }
        }
        catch(error){
            console.log(error);
        }
    }

    render(){
        const displayBilling = this.state.billingStatus;
        const handleChange = this.handleChange;
        function Billing (props){
            return;
        }

        return (
            <div>
                <PathnameDiv pathname={["Accueil","Panier","Paiement"]}></PathnameDiv>
                <div className={styles.detailsDiv}>
                    <form onSubmit={this.handleSubmit}>
                        <AdressForm name="deliveryAdress" handleChange={this.handleChange} title="Adresse de livraison"></AdressForm>
                        <PaymentForm name="creditCard" handleChange={this.handleChange}></PaymentForm>
                        <div className={styles.billingAdress}>
                            <table className={styles.detailsTable}>
                                <tr className={styles.detailsRows}>
                                    <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                                        <p style={{fontWeight:"bold",paddingLeft:"1em"}}> Adresse de facturation </p>
                                    </td>
                                </tr>
                                <tr className={styles.detailsRows}>
                                    <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                                        <label>
                                            <input style={{marginRight:"5px"}} type="radio" name="billing_radio" value="same_adress" onChange={this.handleBillingAdress}></input>
                                            Identique à l’adresse de livrasion
                                        </label>
                                        <br></br>
                                        <label>
                                            <input style={{marginRight:"5px"}} type="radio" name="billing_radio" value="new_adress" onChange={this.handleBillingAdress}></input>
                                            Utiliser une adresse de facturation différente
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className={styles.billingDiv}>
                            {displayBilling ? <AdressForm name="billingAdress" handleChange={this.handleChange} title="Adresse de facturation"></AdressForm> : null}
                        </div>
                        <div style={{width:"60%"}}>
                            <input className={styles.paymentButton} type="submit" value="Payer" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Payment