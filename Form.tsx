import { useState } from "react";
import Client from "../core/Client";
import Button from "./button";
import Enter from "./Enter";

interface FormProps{
    client: Client
    alterClient?: (client: Client) => void
    cancele?: () => void


    
}

export default function Form(props: FormProps) {
    const id= props.client?.id
    const[name, setName] = useState(props.client?.name ?? '')
    const[age, setAge] = useState(props.client?.age ?? '')
    return(
<div>
    {id? (
<Enter text="Código" value={id}
 className="mb-4"/>

) : false}

<Enter  
text="nome"
  value={name}
  className="mb-4"
  valueUpdate={setName}/>

  <Enter 
text="Idade"
 type="number" 
 value={age}
 valueUpdate={setAge}/>
 <div className="flex justify-end mt-7" >
<Button cor="blue" onClick={() => props.alterClient?.(new Client(name, +age, id))} >
    {id ? 'Alterar' : 'Salvar'}
</Button>

<Button onClick={props.cancele} cor="blue">
    Cancelar
</Button>
</div>
</div>



    )


}