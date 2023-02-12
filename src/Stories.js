import Story from "./Story";

export default function Stories() {
    return (
        <div className="stories">
            <Story imagem="./assets/img/9gag.svg" usuarioStory="9gag" />
            <Story imagem="./assets/img/meowed.svg" usuarioStory="meowed" />
            <Story imagem="./assets/img/barked.svg" usuarioStory="barked" />
            <Story imagem="./assets/img/nathanwpylestrangeplanet.svg" usuarioStory="nathanwpylestrangeplanet" />
            <Story imagem="./assets/img/wawawicomics.svg" usuarioStory="wawawicomics" />
            <Story imagem="./assets/img/respondeai.svg" usuarioStory="respondeai" />
            <Story imagem="./assets/img/filomoderna.svg" usuarioStory="filomoderna" />
            <Story imagem="./assets/img/memeriagourmet.svg" usuarioStory="memeriagourmet" />

            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div >

    )
}