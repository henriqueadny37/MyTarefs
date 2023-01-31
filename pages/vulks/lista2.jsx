import lisprod2 from "../../data/lisprod2"

export default function lista2(){

    const bords = {
        border:"1px solid orange",
        textAlign:"center",
        fontSize:"3rem",
    }

    function renderList(){
        return lisprod2.map(produto => {
            return(
                <tr key={produto}>
                    <td style={bords}>{produto.id}</td>
                    <td style={bords}>{produto.nome}</td>
                    <td style={bords}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <table style={{
                border:"1px solid white",
                textAlign:"center",
                margin:"90px",
                fontSize:"3rem",
            }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}