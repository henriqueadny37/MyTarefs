export default function UcontadorNew(props){
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            width:"100px",
            height:"100px",
            borderRadius:"100px",
            backgroundColor:"#f00",
            color:"#fff",
            margin:"10px",
            fontSize:"3rem",
        }}>
            {props.numeros}
        </div>
    )
}