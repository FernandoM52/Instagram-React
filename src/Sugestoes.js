import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const listaSugestoes = [
        { img: "./assets/img/bad.vibes.memes.svg", usr: "bad.vibes.memes" },
        { img: "./assets/img/chibirdart.svg", usr: "chibirdart" },
        { img: "./assets/img/razoesparaacreditar.svg", usr: "razoesparaacreditar" },
        { img: "./assets/img/adorable_animals.svg", usr: "adorable_animals" },
        { img: "./assets/img/smallcutecats.svg", usr: "smallcutecats" },
    ]

    return (
        <div className="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <ul>
                {listaSugestoes.map((sg) => <Sugestao img={sg.img} usr={sg.usr} />)}
            </ul>
        </div>
    )
}