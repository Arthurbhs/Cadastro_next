import Client from "../core/Client";
import { IconEdit, IconTrash } from "./Icons";

interface TableProps {
    clients: Client[]
}

export default function Tabela(props: TableProps) {
    
    function renderHeader(){
    
    return (
        <table>
           <tr>
            <th>Código</th>
           <th>nome</th>
           <th>Idade</th>
           <th>Açoes</th>
           </tr>
        </table>
    )
    }

    function renderAction(client: Client){
        return(
       <td>
        <button className={`flex justifi-center items-center
        text-green-600 rounded-full p-2 m-1
        hover:bg-purple-50`}>
            {IconEdit}
        </button>
        <button className={`flex justifi-center items-center
        text-red-600 rounded-full p-2 m-1
        hover:bg-purple-50`}>
            {IconTrash}
        </button>
       </td>

        )
    }

    function renderData(){
        return props.clients?.map((client,i) => {
            return (
<tr>
<td>{client.id}</td>
    <td>{client.name}</td>
    <td>{client.age}</td>
   
</tr>

            )
        })
    }
    return(
        <table>
            <thead>
            {renderHeader()}
            </thead>

            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}