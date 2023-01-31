import { useState } from "react";
import AquaPlay from "../../components/AquaPlay";

export default function fire(){
    const [numero, setNumero] = useState(0)

    const cre = () => setNumero(numero + 1)

    const dec = () => setNumero(numero - 1)
    

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
        }}>
            <h2>contors</h2>
            <AquaPlay numero={numero} />
            <div>
                <button onClick={cre}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </div>
    )
}