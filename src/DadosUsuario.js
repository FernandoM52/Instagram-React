export default function DadosUsuario(props) {
    const { nomeInicial, fotoInicial, nomeUsuario, setUsuario, fotoUsuario, setFoto } = props;

    console.log(props);

    function alterarNomeDoUsuario() {
        const novoNome = prompt("Digite seu nome de usuário");
        setUsuario(novoNome);
    }

    function alterarFoto() {
        const novaFoto = prompt("Insira o link da sua foto");
        setFoto(novaFoto);
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" src={novaFoto ? novaFoto : fotoInicial} alt="imagem de perfil" onClick={alterarFoto} />
            <div className="texto">
                <span data-test="name">
                    <strong data-test="name">{novoNome ? novoNome : nomeInicial}</strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={alterarNomeDoUsuario} ></ion-icon>
                </span>
            </div>
        </div>
    )
}