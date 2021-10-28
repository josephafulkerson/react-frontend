import React, {useState} from "react";
import Clients from "./Clients";

function ForBrokers({ clientData, setClients, addClient }) {
    const [ clientName, setClientName ] = useState('')
    console.log(clientName)


    function handleSumbit(e) {
        e.preventDefault()
        addClient(clientName)
        e.value = null

    }

    const deleteClient = (id) => {
        const removeClients = clientData.filter((client) => client.id !== id);
        setClients(removeClients);
      };
    
  return (
    <>
    <h2>{clientData.length} Clients</h2>
      {clientData.map(data => <Clients clients={data} deleteClient={deleteClient} setClients={setClients}/>)}
      <div className='addClient'>
      <h3>Add Client</h3>
      <form onSubmit={handleSumbit}>
          <input type='text'  value={clientName} onChange={(e) => setClientName(e.target.value)}></input>
          <button>Add Client</button>
      </form>
      </div>
    </>
  );
}

export default ForBrokers;
