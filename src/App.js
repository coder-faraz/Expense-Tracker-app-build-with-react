import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NavigationBar from './MyComponents/Navbar';
import Tracker from './MyComponents/Tracker';
import TransactionList from './MyComponents/TransactionList';
import NewTransaction from './MyComponents/NewTransaction';
import GlobalProvider from './MyContexts/GlobalState';



function App() {

  const [mode, setMode] = useState("light")

  let changer = () => {
    if(mode==='light') {
      document.body.classList.add("dark");
      setMode("dark");
    }
    else if(mode==='dark') {
      document.body.classList.remove("dark");
      setMode("light");
    }
  }


  return (
  
    <GlobalProvider>
      <NavigationBar title="Expense Tracker" useMode={ mode } toggler={ changer }/>
      <Tracker useMode={ mode } />
      <TransactionList useMode={ mode } />
      <NewTransaction useMode={ mode } />
    </GlobalProvider>

  );
}



export default App;
