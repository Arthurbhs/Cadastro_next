import Client from "../core/Client";

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
           </tr>
        </table>
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