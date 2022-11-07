import React, { useState } from "react"
import Button from "../components/button";
import Form from "../components/Form";
import Layount from "../components/Layout"
import Tabela from "../components/Table"
import Client from "../core/Client";



export default function Index() {
const [client, setClient] = useState<Client>(Client.vazio())
  const[visivel, setVisivel] = useState<'tabela' | 'from' >('tabela')


const  clients = [
  new Client('ana', 35, '1'),
  new Client('Paulo', 30, '2'),
  new Client('Clara', 25, '4'),
  new Client('Robert', 45, '5'),
]

function  clientSelected(client: Client){
  setClient(client)
  setVisivel("from")

}
function  clientDeleted(client: Client){


}

function newClient() {
  setClient(Client.vazio())
  setVisivel('from')

}

function ClientSave(client: Client) {
  console.log(client)
  setVisivel('tabela')

}



  return ( <div className={`flex justify-center items-center h-screen
  bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

    <Layount title="Cadastro Simples">
      {visivel === 'tabela' ? (
      <>
     <div className="flex justify-end">
      <Button cor="blue" 
      onClick={newClient}>Novo cliente</Button>
     </div>

   <Tabela clients={clients}
    clientSelected={clientSelected}
    clientDelete={clientDeleted}
    ></Tabela>
</>) : (
<Form client={client}
alterClient={ClientSave}
cancele={() => setVisivel('tabela')}/>
 )}
    </Layount>

   
  </div>
  
  )
}
