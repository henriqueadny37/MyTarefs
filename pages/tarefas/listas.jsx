import listaprod from "../../data/listaprod";

export default function listas(){

    const bords = {
        border:"3px dotted #008000",
        textAlign:"center",
        fontFamily:"monospace",
        fontSize:"3rem",
    }

    function RenderListas(){
        return listaprod.map( Produto => {
            return(
                <tr key={Produto.id}>
                        <td style={bords}>{Produto.id}</td>
                        <td style={bords}>{Produto.nome}</td>
                        <td style={bords}>{Produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table style={{
                border:"2px solid #fafafa",
                margin:"80px",
                right:"50%",
                fontSize:"3rem",
            }}>
                <thead>
                    <tr>
                        <th>item</th>
                        <th>nome</th>
                        <th>preço</th>
                    </tr>
                </thead>
                <tbody>
                    {RenderListas()}
                </tbody>
            </table>
        </div>
    )

}