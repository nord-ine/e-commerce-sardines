import React from 'react'

import AdressForm from '../components/AdressForm/AdressForm'

import styles from '../styles/Adress.module.css'

class Adress extends React.Component{
    constructor(props){
        super(props);
        this.addAdressForm = this.addAdressForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            addingAdress:   false,
            newAdress:      {}
        };
    }

    addAdressForm(){
        if(this.state.addingAdress==false){
            console.log("show form");
            this.setState({['addingAdress']: true});
        }
        else{
            console.log("save data and reload page");
        }
    }

    handleChange(name,value){
        this.setState({
            [name]: value
        });
    }

    render(){

        const adresses = [{additional_info:"",adress:"1 rue de Paris",city:"Paris",country:"France",lastname:"Dupont",firstname:"Jean",phone_number:"0612345678",postal_code:"75000"}];
        const content = adresses.map(adress => AdressOverview(adress));
        const displayForm = this.state.addingAdress;

        return(
            <div style={{width:"80%",margin:"auto"}}>
                <p className={styles.title}> ADRESSES </p>
                {content}
                {displayForm ? <AdressForm name="newAdress" handleChange={this.handleChange} title="Nouvelle adresse"></AdressForm> : null}
                <div className={styles.addButtonDiv}>
                    <button className={styles.addButton} onClick={this.addAdressForm}> Ajouter une adresse </button>
                </div>
            </div>
        )
    }

}

const AdressOverview = (props) =>{
    function handleClick(){
        console.log(props);
    }

    return(
        <div className={styles.adressDiv}>
            <button className={styles.adressButton} onClick={handleClick}>
                <table style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> Prénom: <b> {props.firstname} </b></p>
                        </td>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> Nom: <b> {props.lastname} </b></p>
                        </td>
                    </tr>
                    <tr style={{width:"100%"}}>
                        <td colSpan={2} style={{width:"100%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> Adresse: <b> {props.adress + ' ' + props.postal_code + ' ' + props.city} </b></p>
                        </td>
                    </tr>
                </table>
            </button>
        </div>
    )
}

export default Adress