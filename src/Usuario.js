import DadosUsuario from "./DadosUsuario"
import { useState } from "react";
export default function Usuario() {


    const nomeInicial = "";
    const fotoInicial = "https://cdn-icons-png.flaticon.com/512/1946/1946429.png"

    const [nomeUsuario, setUsuario] = useState("");
    const [fotoUsuario, setFoto] = useState("");


    return (
        <DadosUsuario nomeInicial={nomeInicial} fotoInicial={fotoInicial} nomeUsuario={nomeUsuario} setUsuario={setUsuario} fotoUsuario={fotoUsuario} setFoto={setFoto} />
    )
}