
import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { GlobalContext } from '../MyContexts/GlobalState';



const Tracker = (props) => {

  const { transactions } = useContext(GlobalContext);


  const amt = transactions.map(transaction => transaction.amt);

  const totalMoney = amt.reduce((acc, item) => (acc += item), 0).toFixed(2);


  const income = amt
  .filter(amt => amt > 0)
  .reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = amt
  .filter(amt => amt < 0)
  .reduce((acc, item) => (acc += item), 0).toFixed(2);


    return (

        <Container>
            <h2 style={{ marginTop: "10px", marginLeft: "400px"}}> Expense Tracker </h2> <br />
            <h3 style={{ marginLeft: "240px"}}> Your Balance </h3> 
            <h2 style={{ marginLeft: "240px", marginBottom: '22px'}}> &#8377;{ totalMoney } </h2>

        <Container>
        <Row>
        <Card style={{ width: '18rem', marginLeft: '240px', backgroundColor: props.useMode==='light'? "white":"#36454F" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center", color: props.useMode==='light'? "black": "white"}}> INCOME </Card.Title>
            <Card.Text style={{ textAlign: "center", fontSize: '22px', color: '#2ecc71'}}> &#8377;{ income } </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', backgroundColor: props.useMode==='light'? "white":"#36454F" }}>
          <Card.Body>
            <Card.Title style={{ textAlign: "center"}}> EXPENSE </Card.Title>
            <Card.Text style={{ textAlign: "center",  fontSize: '22px', color: "#c0392b"}}> &#8377;{ expense } </Card.Text>
          </Card.Body>
        </Card>
        </Row>
        </Container>

        </Container>

    );
}



export default Tracker;


