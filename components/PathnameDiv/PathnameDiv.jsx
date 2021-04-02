import React from 'react'

import styles from './PathnameDiv.module.css'

const PathnameDiv = (props) => {

    let path = "";
    props.pathname.forEach(element=> path+=element+" / ")

    return (
        <div className={styles.container}>
            <p> {path} </p>
        </div>
    )
}

export default PathnameDiv
