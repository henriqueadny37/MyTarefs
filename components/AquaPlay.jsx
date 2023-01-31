export default function AquaPlay(props){
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:"25px",
            width:"50px",
            height:"50px",
            margin:"20px",
            fontSize:"2rem",
            backgroundColor:"#fafafa",
            color:"#f00",
        }}>
            {props.numero}
        </div>
    )
}