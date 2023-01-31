export default function Titulo(info) {
    
    return info.pequeno ? (
        <>
        <p>{info.primeiro}</p>
        <p>{info.seundario}</p>
        </>
    ) : (
        <>
        <h1>{info.primeiro}</h1>
        <h2>{info.secundario}</h2>
        </>
    )
}