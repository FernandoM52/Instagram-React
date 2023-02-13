import Story from "./Story";

export default function Stories() {

    const listaStories = [
        { imagem: "./assets/img/9gag.svg", usuarioStory: "9gag" },
        { imagem: "./assets/img/meowed.svg", usuarioStory: "meowed" },
        { imagem: "./assets/img/barked.svg", usuarioStory: "barked" },
        { imagem: "./assets/img/nathanwpylestrangeplanet.svg", usuarioStory: "nathanwpylestrangeplanet" },
        { imagem: "./assets/img/wawawicomics.svg", usuarioStory: "wawawicomics" },
        { imagem: "./assets/img/respondeai.svg", usuarioStory: "respondeai" },
        { imagem: "./assets/img/filomoderna.svg", usuarioStory: "filomoderna" },
        { imagem: "./assets/img/memeriagourmet.svg", usuarioStory: "memeriagourmet" },

    ];
    return (
        <div className="stories">
            <ul className="displayStories">
                {listaStories.map((s) => <Story imagem={s.imagem} usuarioStory={s.usuarioStory} />)}
            </ul>

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div >

    )
}