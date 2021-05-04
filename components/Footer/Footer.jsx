import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
	
    return (
<footer className={styles.footer}> 
<table className={styles.table}>
	<td className={styles.cellule}>
	<div className={styles.titre}> Infos pratiques</div>
	<br/>
	Votre livraison
	<br/>
	Vos commandes
	<br/>
	Service client
	<br/>
	Modalités de paiment
	<br/>
	Politique de retour des produits
	<br/>
	Conditions générales de ventes
	<br/>
	Confidentialité
	</td>
	<td className={styles.cellule}><div className={styles.titre}>Contactez-nous</div>
		<br/>
	E-mail: <a> contact@laviellesardine.com </a>
	<br/>
	Par courrier: <br/>
	CONSERVERIE La Vieille Sardine – <br/>Service Clients<br/>
	BP 10002 -56927 Villeneuve la Vieille cedex
	</td>
	<td className={styles.cellule}> <div className={styles.titre}>Inscription à notre newsletter </div><br/>
	Inscrivez-vous à notre newsletter at soyez les premiers à recevoir nos nouveautés et promotions.
	<br/>
	<table>
	<td ><form action="" method="post">
	<input className={styles.newsletter} type="text" placeholder="Votre e-mail" />
	</form>
	</td>
    <td>
	<form>
	<input  type="submit" name="OK" value=" Ok "/>
	</form>
    </td>
    </table>

	</td>
		</table>
		<img className={styles.mdpaiemaent} src="/mdpaiement.jpg"/>
</footer>
    )
}

export default Footer