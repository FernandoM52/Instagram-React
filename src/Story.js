export default function Story(props) {
    console.log(props);
    return (
        <ul>
            <li>
                <div className="story">
                    <div className="imagem">
                        <img src={props.imagem} alt={props.user} />
                    </div>
                    <div className="usuario">
                        {props.user}
                    </div>
                </div>
            </li>
        </ul>

    )
}