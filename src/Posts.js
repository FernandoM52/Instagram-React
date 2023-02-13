import Post from "./Post";

export default function Posts() {

    const feed = [
        { ftUsuario: "./assets/img/meowed.svg", usrPost: "meowed", conteudo: "./assets/img/gato-telefone.svg", imgCurtidoPor: "./assets/img/respondeai.svg", curtidoPor: "respondeai" },
        { ftUsuario: "./assets/img/barked.svg", usrPost: "barked", conteudo: "./assets/img/dog.svg", imgCurtidoPor: "./assets/img/adorable_animals.svg", curtidoPor: "adorable_animals" },
        { ftUsuario: "./assets/img/meowed.svg", usrPost: "meowed", conteudo: "./assets/img/gato-telefone.svg", imgCurtidoPor: "./assets/img/barked.svg", curtidoPor: "barked" }
    ]
    return (
        <div className="posts">
            <ul>
                {feed.map((f) => <Post ftUsuario={f.ftUsuario} usrPost={f.usrPost} conteudo={f.conteudo} imgCurtidoPor={f.imgCurtidoPor} curtidoPor={f.curtidoPor} />)}
            </ul>
        </div>
    )
}