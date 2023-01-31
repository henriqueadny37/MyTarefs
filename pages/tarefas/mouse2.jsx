import { useState } from "react";

export default function mouse2(){
    const [X, setX] = useState()

    const arrayY = useState(0)
    let Y = arrayY[0]
    const alterarY = arrayY[1]

    function whereMove(ev){
        setX(ev.clientX)
        alterarY(ev.clientY)
    }

    const colors = {
        backgroundColor:"darkblue",
        color:"#dd7302",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        fontSize:"3rem",
        fontFamily:"monospace",
        justifyContent:"center",
        height:"100vh",
    }

    return(
        <div style={colors} onMouseMove={whereMove}>
            <span>Eixo X: {X}</span>
            <span>Eixo Y: {Y}</span>
        </div>
    )
}




































// export default function mouse2(){
//     const [X, setX] = useState()

//     const arrayY = useState(0)
//     let Y = arrayY[0]
//     const alterarY = arrayY[1]

//     const habibs = {
//         backgroundColor:"orange",
//         display:"flex",
//         flexDirection:"column",
//         alignItems:"center",
//         justifyContent:"center",
//         height:"100vh",
//         fontSize:"2rem",
//         fontFamily:"monospace",
//     }

//     function whereMove(ev){
//         setX(ev.clientX)
//         alterarY(ev.clientY)
//     }

//     return(
//         <div style={habibs} onMouseMove={whereMove}>
//             <span>Eixo H: {X}</span>
//             <span>Eixo V: {Y}</span>
//         </div>
//     )
// }