import React from 'react'
import AdressForm from '../components/AdressForm/AdressForm'
import PathnameDiv from '../components/PathnameDiv/PathnameDiv'
import PaymentForm from '../components/PaymentForm/PaymentForm'
import ControlledInput from '../components/ControlledInput/ControlledInput'
import OrderRecap from '../components/OrderRecap/OrderRecap'
import {useContext,useEffect,useState} from 'react';
import ProductsContext from '../Functions/ProductsContext';
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
            billingStatus:      false,
            email_adress: ""
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

        return (
            <div style={{width:"100%",overflow:"hidden"}}>
                {/* <PathnameDiv pathname={["Accueil","Panier","Paiement"]}></PathnameDiv> */}
                <div className={styles.detailsDiv}>
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles.userDiv}>
                            <table className={styles.detailsTable}>
                                <tr className={styles.detailsRows}>
                                    <td colSpan={1} style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                                        <p style={{fontWeight:"bold",paddingLeft:"1em"}}> Profil </p>
                                    </td>
                                    <td colSpan={1} style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                                        {/* <a style={{float:"right",paddingLeft:"1em"}} href="LoginPage"> Vous avez déjà une compte ?</a> */}
                                    </td>
                                </tr>
                                <tr className={styles.detailsRows}>
                                    <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                                        <label>
                                            <p className={styles.inputArea}>
                                                Adresse e-mail
                                                <br></br>
                                                <ControlledInput name="email_adress" type ="text" handleChange={this.handleChange}></ControlledInput>
                                            </p>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </div>
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
                        <div>
                            <input className={styles.paymentButton} type="submit" value="Payer" />
                        </div>
                    </form>
                </div>
                <div className={styles.orderDiv}>
                    {/* <OrderRecap></OrderRecap> */}
                </div>
            </div>
        )
    }
}

export default Payment