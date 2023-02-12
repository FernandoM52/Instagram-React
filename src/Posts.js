import Post from "./Post";

export default function Posts() {
    return (
        <div className="posts">
            <Post fotoUsuario="./assets/img/meowed.svg" usuarioPost="meowed" conteudo="./assets/img/gato-telefone.svg" imagemCurtidoPor="./assets/img/respondeai.svg" curtidoPor="respondeai" />
            <Post fotoUsuario="./assets/img/barked.svg" usuarioPost="barked" conteudo="./assets/img/dog.svg" imagemCurtidoPor="./assets/img/adorable_animals.svg" curtidoPor="adorable_animals" />
            <Post fotoUsuario="./assets/img/meowed.svg" usuarioPost="meowed" conteudo="./assets/img/gato-telefone.svg" imagemCurtidoPor="./assets/img/barked.svg" curtidoPor="barked" />

        </div>
    )
}