
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { GlobalContext } from '../MyContexts/GlobalState';



const TransactionList = (props) => {

    const { transactions, delTransaction } = useContext(GlobalContext);

    return (

        <Container>
            <h3 style={{ marginLeft: "240px", marginTop: '26px'}}> History </h3>
            <ul className='list'>
                { transactions.map(transaction => {
                    return <li className={ transaction.amt<0? 'minus':'plus'} key={transaction.id} style={{ backgroundColor: props.useMode==='light'? "white":"#36454F", color: props.useMode==='light'? "black":"white" }}>
                        {transaction.text.charAt(0).toUpperCase() + transaction.text.slice(1)} <span> &#8377;{transaction.amt} </span>
                        <button className='delete-btn' onClick={ () => { delTransaction(transaction.id) }}> x </button>
                        </li>
                    }) }
            </ul>
        </Container>

    );
}


export default TransactionList;


