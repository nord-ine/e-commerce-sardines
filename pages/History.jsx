import React from 'react'

import styles from '../styles/History.module.css'

import Footer from '../components/Footer/Footer'

const History = () => {
    return (
        <div >
                <img src="/histoire.jpg" className={styles.image}/>
                <div className={styles.texte}>
                <div className={styles.titre}>Histoire</div>
                <p className={styles.paragraphe}>Sur tout le littoral breton, la sardine a occupé une place importante dès l'Antiquité, rythmant la vie et l'économie. Qu'elle abonde et l'on abandonnait pour elle la culture de la terre, qu'elle se fasse rare et de vastes souscriptions populaires soutenaient les ports sardiniers...
            Les premiers bancs apparaissaient au printemps à Saint-Jean-Baptiste puis remontaient le golfe de Gascogne... Les pêcheurs bretons descendaient alors en Atlantique pour les suivre et achevaient leur pêche à la Toussaint... Outre les pêcheurs, de nombreux métiers dépendaient en effet du poisson d'argent : armateurs, avitailleurs, écoreurs ...
            Dans les conserveries ce sont les femmes qui officiaient – elles y sont toujours nombreuses aujourd'hui –, maîtrisant le délicat savoir-faire nécessaire pour préparer la sardine sans l'abîmer. Il s'agissait parfois de brodeuses et souvent de saisonnières qui offraient leurs services de port en port, suivant la progression des pêcheurs.
            Le soudeur de boîtes était un autre métier saisonnier : partant du Portugal, il pouvait remonter le littoral à pied pour finir sa saison en Bretagne !
            Pour se convaincre de la puissance économique de la sardine, il faut aussi se souvenir que c'est surtout pour elle que le chemin de fer arriva jusqu'à Villeneuve la Vieille en 1884...</p>
            <div className={styles.titre}> La Vieille Sardine : une success story bretonne</div>
                <p className={styles.paragraphe}>
            Dès les années 1960, à l'heure où la mécanisation du travail est intervenue dans les conserveries et où on a commencé à travailler du surgelé pour être certain d'avoir de la matière première, l’entreprise a choisit de faire le choix de la qualité au détriment de la quantité. En 1967, le premier magasin de vente directe est ouvert.
            Aujourd'hui, La Vieille Sardine se porte très bien. Son chiffre d'affaires est de 24 millions d'euros. L’entreprise possède 52 magasins, du Touquet à Menton, et ouvre 3 à 4 magasins par an. 40 % environ du chiffre d’affaire se fait par correspondance, par courrier et internet. C’est pourquoi l'entreprise veut mettre en ligne un nouveau site internet en 2018. L'activité est saisonnière, ce qui rend la masse salariale variable mais en pleine saison de production, environ 350 personnes travaillent dans l'entreprise, tous services confondus. L’année 2018 est une très bonne année pour la sardine avec 40 % de la production réalisée par les trois bateaux de pêche de l'entreprise.</p> </div>

        </div>
    )
}

export default History
