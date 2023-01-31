export default function Sopar(props){
    const Sopar = props.numero % 3 === 0 
    return(
        <div>
            {Sopar ?
            <span>{props.numero}</span> :
            null}
        </div>
    )
}