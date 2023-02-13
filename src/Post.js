export default function Post(props) {
    return (
        <li data-test="post">
            <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img src={props.ftUsuario} alt={props.usrPost} />
                        {props.usrPost}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img data-test="post-image" src={props.conteudo} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imgCurtidoPor} />
                        <div data-test="likes-number" className="texto">
                            Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}