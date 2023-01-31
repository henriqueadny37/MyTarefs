import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <h1>informe{props.comed}</h1>
            <Filho boost = "primeira" comed={props.comed} />
            <Filho boost = "segunda" comed={props.comed} />
        </div>
    )
}