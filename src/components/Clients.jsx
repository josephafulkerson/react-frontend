import React from "react";

function Clients({ clients, deleteClient, setClients }) {

    const {id, name} = clients

    function handleDelete(){
    deleteClient(id)
    fetch(`http://localhost:9292/clients/${id}`,{
        method: "DELETE",
    })
}
  return (
    <div className='clientList'>
      <p>{name}</p> 
      <button onClick={handleDelete}>Remove</button>
    </div>
  );
}

export default Clients;
