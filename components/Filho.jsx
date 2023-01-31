export default function Filho(props){
    return(
        <div style={{
            alignItems:"center",
            color:"darkorange",
            display:"flex"
        }}>
            <h1>{props.boost}</h1>
            <h2>{props.comed}</h2>
        </div>
    )
}