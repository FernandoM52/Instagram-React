export default function Sugestao(props) {
    return (
        <li>
            <div class="sugestao">
                <div class="usuario">
                    <img src={props.img} alt={props.usr} />
                    <div class="texto">
                        <div class="nome">{props.usr}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
        </li>
    )
}