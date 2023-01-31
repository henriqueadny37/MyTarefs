import { useState } from "react";

export default function mouse3(){
    const [x, setX] = useState()

    const arrayY = useState(0)
    let Y = arrayY[0]
    const alterarY = arrayY[1]


    const cores = {
        display:"flex",
        flexDirection:"column",
        height:"100vh",
        justifyContent:"center",
        backgroundColor:"#62ff00",
        fontSize:"2rem",
        fontFamily:"monospace",
        alignItems:"center",
    }

    function whereMove(ev){
        setX(ev.clientX)
        alterarY(ev.clientY)
    }
    return(
        <div style={cores} onMouseMove={whereMove}>
            <span>Eixo Horizontal: {x}</span>
            <span>Eixo Vertical: {Y}</span>
        </div>
    )
}