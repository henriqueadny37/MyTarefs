import { useState } from "react";

export default function Formu(){
    const [valor, setValor] = useState(undefined)

    function alterar(){
        setValor(valor + "!")
    }

    return(
        <div style={{
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            width:"260px",
            heigth:"260px",
        }}>
            <input type="text" value={valor}
            onChange={e => setValor(e.target.value)} />
            <button onClick={alterar}>Acessar</button>
        </div>
    )
}