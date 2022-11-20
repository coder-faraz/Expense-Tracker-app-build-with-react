
import React, { useContext, useState } from "react";
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GlobalContext } from "../MyContexts/GlobalState";



function NewTransaction(props) {

  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState('');
  const [amt, setAmt] = useState(0);


  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amt: Number(amt)
    };

    addTransaction(newTransaction);

    setText('');
    setAmt(0);
  }


    return (

    <Container style={{ width: "48%" }}>
        <h3> New Transaction </h3>
    <Form style={{ width: "95%" }} onSubmit={ submitHandler }>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Text</Form.Label>
        <Form.Control type="text" placeholder="Enter text.." value={ text } onChange={ changeHandler } style={{ backgroundColor: props.useMode==='light'? "white":"#36454F", color: props.useMode==='light'? "black":"white" }} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="amt">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter Amount.." value={ amt } onChange={ (e) => { setAmt(e.target.value); } } style={{ backgroundColor: props.useMode==='light'? "white":"#36454F", color: props.useMode==='light'? "black":"white" }} />
      </Form.Group>
      <Button variant={ props.useMode==='light'? "primary":"secondary"} style={{ width: "98%", marginBottom: "10px"}} type="submit">   Add Transaction    </Button>
    </Form>
    </Container>
  );
}


export default NewTransaction;
