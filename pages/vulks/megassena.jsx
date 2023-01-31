import { useEffect, useState } from "react";
import { mega } from "../../function/mega"
import UcontadorNew from "../oneme/UcontadorNew";

export default function megassena(){
    const [qtde, setqtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function RenderNumero(){
        return numeros.map(
            numeros => <UcontadorNew key={numeros} numeros={numeros} />
        )
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <h1>
                Mega-Sena
            </h1>
            <div style={{
                display:"flex",
                justifyContent:"column",
                flexWrap:"wrap",
            }}>
                {RenderNumero()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde}
                onChange={ev => setqtde(ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar aposta
                </button>
            </div>
        </div>
    )
}