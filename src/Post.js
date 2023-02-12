export default function Post(props) {
    console.log(props);
    return (
        <ul className="fotosFeed">
            <li>
                <div className="post">
                    <div className="topo">
                        <div className="usuario">
                            <img src={props.fotoUsuario} alt={props.usuarioPost} />
                            {props.usuarioPost}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo">
                        <img src={props.conteudo} />
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div className="curtidas">
                            <img src={props.imagemCurtidoPor} />
                            <div className="texto">
                                Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>

    )
}