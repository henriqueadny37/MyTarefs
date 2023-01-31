import { Component } from "react";
import Contador from "../../components/Contador";

export default class conts extends Component{
    render(){
        return(
            <>
                < Contador valorInicial={90} passo={1} />

            </>
        )
    }
}