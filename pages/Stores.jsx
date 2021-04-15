import React from 'react'

import styles from '../styles/OrderHistory.module.css';

class Stores extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width:"80%",margin:"auto"}}>
                <table style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"10%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <img src='.\img_france.png' className={styles.picture}></img>
                        </td>
                        <td colSpan={1} style={{width:"10%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p className={styles.title}> FRANCE </p>
                        </td>
                    </tr>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"30%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <img src='.\img_villeneuve.png'></img>
                        </td>
                        <td colSpan={1} style={{width:"70%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> <b> Villeneuve la Vieille </b> </p>
                            <p> <b> Adresse : </b> 5 rue Jean Jaurès 56937 Villeneuve la Vieille France </p>
                            <p> <b> Tel : </b> 02 97 53 80 88 </p>
                            <p> <b> Horaires d'ouvertures : </b> </p>
                            <p> <b> Du lundi au samedi </b> 10h30 – 12h30 et 15h30 – 18h30 </p>
                            <p> <b> Dimanche : </b> 10h20 – 13h et 15h30 - 18h30 </p>
                            <p> <b> Dirigeant : </b> M. Babecq </p>
                        </td>
                    </tr>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"10%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <img src='.\img_belgium.png' className={styles.picture}></img>
                        </td>
                        <td colSpan={1} style={{width:"10%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p className={styles.title}> BELGIQUE </p>
                        </td>
                    </tr>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"30%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <img src='.\img_knokke_heist.png'></img>
                        </td>
                        <td colSpan={1} style={{width:"70%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> <b> Knokke-Heist </b> </p>
                            <p> <b> Adresse : </b> Lippenslaan 256 8300 Knokke-Heist Belgique </p>
                            <p> <b> Tel : </b> 0032 50 62 22 32 </p>
                            <p> <b> Horaires d'ouvertures : </b> </p>
                            <p> <b> Du lundi au samedi </b> 10h00 – 18h00 </p>
                            <p> <b> Dimanche : </b> 10h00 – 13h et 14h00 - 18h00 </p>
                            <p> <b> Dirigeant : </b> M. Van den Groodt </p>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
    /*
    Knokke-Heist
Adresse :
Lippenslaan 256
 8300 Knokke-Heist
Belgique
Tel: 0032 50 62 22 32
Horaires d'ouverture :
Du mardi au samedi : 10h00 – 18h00
Dimanche : 10h00 – 13h et 14h00 - 18h00
Dirigeant :
M. Van den Groodt
    */
}

export default Stores
