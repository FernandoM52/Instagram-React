export default function Story(props) {
    return (
        <ul>
            <li>
                <div className="story">
                    <div className="imagem">
                        <img src={props.imagem} alt={props.usuarioStory} />
                    </div>
                    <div className="usuario">
                        {props.usuarioStory}
                    </div>
                </div>
            </li>
        </ul>

    )
}