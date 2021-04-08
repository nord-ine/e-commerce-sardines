import React from 'react'

import styles from '../styles/Profile.module.css'

class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.mainDiv}>
                <p className={styles.title}> Mon compte </p>
                <p className={styles.personalMsg}> {"Bienvenue XXX" } </p>
                <hr></hr>
                <div className={styles.orderDiv}>
                    <p style={{fontSize:"2em"}}> Mes commandes</p>
                    <div style={{marginTop:"2em",marginBottom:"2em"}}>
                        <a href="#" className={styles.orderLink}> Tout voir </a>
                    </div>
                </div>
                <div className={styles.settingsDiv}>
                    <p style={{fontSize:"2em"}}> Paramètres du compte </p>
                    <div style={{marginTop:"2em",marginBottom:"2em"}}>
                        <a href="#" className={styles.adressLink}>
                            <img src='\adress.png' className={styles.adressPicture}></img>
                            <p> Modifier les adresses</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile