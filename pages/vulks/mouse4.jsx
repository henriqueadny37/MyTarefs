import { useState } from "react";

export default function mouse4(){
    const [X, setx] = useState()

    const arrayY = useState(0)
    let Y = arrayY[0]
    const alterarY = arrayY[1]

    const hulks = {
       backgroundColor:"#222",
       color:"#dbf507",
       display:"flex",
       flexDirection:"column",
       alignItems:"center",
       fontSize:"3rem",
       fontFamily:"monospace",
       justifyContent:"center",
       height:"100vh",
    }


    function whereMove(ev){
        setx(ev.clientX)
        alterarY(ev.clientY)
    }

    return(
        <div onMouseMove={whereMove} style={hulks}>
            <span>Eixo X: {X}</span>
            <span>Eixo Y: {Y}</span>
        </div>
    )
}