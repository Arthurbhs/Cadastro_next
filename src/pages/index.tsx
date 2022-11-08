import React from "react"
import Layount from "../components/Layout"
import Tabela from "../components/Table"
import Client from "../core/Client";


export default function Index() {


const  clients = [
  new Client('ana', 35, '1'),
  new Client('Paulo', 30, '2'),
  new Client('Pedro', 32, '3'),
  new Client('Clara', 25, '4'),
  new Client('Robert', 45, '5'),
]

  return ( <div className={`flex justify-center items-center h-screen
  bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>

    <Layount title="Cadastro Simples">
<div className="flex"></div>

   <Tabela clients={clients}></Tabela>
    </Layount>

    
  </div>
  )
}
