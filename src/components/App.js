import { useState, useEffect } from "react";
import Header from "./Header";
import ForBrokers from "./ForBrokers";
import Home from "./Home";
import { Route, Switch } from 'react-router-dom'

function App() {
  const [clients, setClients] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/clients")
      .then((r) => r.json())
      .then((data) => setClients(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/stocks")
      .then((r) => r.json())
      .then((data) => setStocks(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/brokers")
      .then((r) => r.json())
      .then((data) => setBrokers(data));
  }, []);


const addNewClient = (client) => {
  setClients([...clients, client]);
};


function addClient(newClient) {fetch("http://localhost:9292/clients", {
  method: "POST",
  headers: {"Content-Type": 'application/json'},
  body: JSON.stringify({name: newClient})
})
.then(r => r.json())
.then(data => addNewClient(data))
}
 

  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/'>
    <Home stocks={stocks} />
    </Route>
    <Route exact path='/forbrokers'>
    <ForBrokers clientData={clients} setClients={setClients} addClient={addClient}/>
    </Route>
    </Switch>
    </>
  );
}

export default App;
