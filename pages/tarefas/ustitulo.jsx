import Titulo from "../../components/Titulo";

export default function titulo(){
    return(
        <div style={{
            width:"360px",
            heigth:"360",
            color:"#bdf507",
            border:"1px solid #fafafa",
            margin:"50px",
            borderRadius:"8px",
        }}>
            <Titulo 
            primeiro = "Faça seu cadastro"
            secundario = "Sua senha"
            pequeno={true}
            />

            <Titulo
            primeiro = "Crie seu login"
            secundario = "Seu email"
            />

            <Titulo 
            primeiro = "Salve seus dados"
            secundario = "Seus dados"
            pequeno = {true}
            />
        </div>
    )
}