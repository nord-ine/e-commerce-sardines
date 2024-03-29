import Link from 'next/link'
import React from 'react'
import {Button} from '@chakra-ui/react';
import styles from '../styles/Profile.module.css'
import { gql, useMutation,useQuery } from '@apollo/client';

import { useRouter } from 'next/router';

const USER = gql`
{
    me{
      id
      email
    }
  }
`

const Profile = ()=>

{
    let tokenObject;
    if (typeof window !== 'undefined') {
        tokenObject = JSON.parse(localStorage.getItem("token"))
    }
    const { loading, error, data } = useQuery(USER);
    const router = useRouter();
    function signOut(){
        if (typeof window !== 'undefined') {
          localStorage.removeItem("token");
        }
        router.push("/")
    }
    
    if(!loading) console.log(data)
    console.log(tokenObject);
    return(
        <div className={styles.mainDiv}>
            <p className={styles.title}> Mon compte </p>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <p className={styles.personalMsg}> Bienvenue   {tokenObject && tokenObject['user']['email']  } </p>
            <Button onClick={signOut} colorScheme="gray" variant="solid">déconnecter</Button>
            </div>
            <hr></hr>
            <div className={styles.orderDiv}>
                <p style={{fontSize:"2em"}}> Mes commandes</p>
                <div style={{marginTop:"2em",marginBottom:"2em"}}>
                    <Link href="\OrderHistory"> 
                    <a className={styles.orderLink}> Tout voir </a>
                    </Link>
                </div>
            </div>
            <div className={styles.settingsDiv}>
                <p style={{fontSize:"2em"}}> Paramètres du compte </p>
                <div style={{marginTop:"2em",marginBottom:"2em"}}>
                    <a href="\Adress" className={styles.adressLink}>
                        <img src='\adress.png' className={styles.adressPicture}></img>
                        <p> Modifier les adresses</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
    

export default Profile