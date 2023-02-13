export default function Sugestao(props) {
    return (
        <li>
            <div className="sugestao">
                <div className="usuario">
                    <img src={props.img} alt={props.usr} />
                    <div className="texto">
                        <div className="nome">{props.usr}</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>
        </li>
    )
}