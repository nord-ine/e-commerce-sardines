import React from 'react';

import styles from '../styles/OrderHistory.module.css';

class OrderHistory extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        const orders = [
                        {
                        id:"000001",
                        date:"01/01/2021",
                        },
                        {
                        id:"000002",
                        date:"31/01/2021",
                        }];

        const content = orders.map(order => OrderOverview(order));

        return(
            <div style={{width:"80%",margin:"auto"}}>
                <p className={styles.title}> COMMANDES </p>
                {content}
            </div>
        )
    }

}

const OrderOverview = (props) =>{
    function handleClick(){
        console.log(props);
        window.location.href ="\Order";
    }

    return(
        <div className={styles.orderDiv}>
            <button className={styles.orderButton} onClick={handleClick}>
                <table style={{width:"100%"}}>
                    <tr style={{width:"100%"}}>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> ID: <b> {props.id} </b></p>
                        </td>
                        <td colSpan={1} style={{width:"50%",boxSizing:"border-box",paddingLeft:"1em",paddingRight:"1em"}}>
                            <p> DATE: <b> {props.date} </b></p>
                        </td>
                    </tr>
                </table>
            </button>
        </div>
    )
}


export default OrderHistory