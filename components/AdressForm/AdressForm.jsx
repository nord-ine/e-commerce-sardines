import React from 'react'
import ControlledInput from '../ControlledInput/ControlledInput'

import styles from './AdressForm.module.css'

class AdressForm extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.name = props.name;
        this.title = props.title;
        this.state = {
            firstname:      "",
            lastname:       "",
            adress:         "",
            additional_info:"",
            postal_code:    "",
            city:           "",
            country:        "",
            phone_number:   ""
        }
        this.props.handleChange(this.name,this.state);
    }

    handleChange(name,value){
        this.setState(
            {[name]: value},
            ()=> this.props.handleChange(this.name,this.state));
    }

    render(){
        return (
            <div className={styles.personalDetails}>
                <table className={styles.detailsTable}>
                    <tr className={styles.detailsRows}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <p style={{fontWeight:"bold",paddingLeft:"1em"}}> Coordonnées </p>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <p style={{paddingLeft:"1em"}}> {this.title} </p>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Prénom
                                    <br></br>
                                    <ControlledInput name="firstname" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                        <td style={{width:"50%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Nom
                                    <br></br>
                                    <ControlledInput name="lastname" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Adresse
                                    <br></br>
                                    <ControlledInput name="adress" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Complémentaire (facultatif)
                                    <br></br>
                                    <ControlledInput name="additional_info" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                    </tr>
                </table>
                <table className={styles.detailsTable}>
                    <tr className={styles.detailsRows}>
                        <td style={{width:"33%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Code postale
                                    <br></br>
                                    <ControlledInput name="postal_code" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                        <td style={{width:"33%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Ville
                                    <br></br>
                                    <ControlledInput name="city" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                        <td style={{width:"33%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Pays
                                    <br></br>
                                    <ControlledInput name="country" type ="text" handleChange={this.handleChange}></ControlledInput>
                                </p>
                            </label>
                        </td>
                    </tr>
                    <tr className={styles.detailsRows}>
                        <td colSpan={3} style={{width:"100%",boxSizing:"border-box",padding:"1em"}}>
                            <label>
                                <p className={styles.inputArea}>
                                    Numéro de téléphone
                                    <br></br>
                                    <ControlledInput name="phone_number" type ="text" handleChange={this.handleChange}></ControlledInput>                                    
                                </p>
                            </label>
                        </td>
                    </tr>
                </table >
            </div>
        )
    }
}

export default AdressForm