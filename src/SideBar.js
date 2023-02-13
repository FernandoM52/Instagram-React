import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function SideBar() {
    return (
        <div className="componentes-sideBar">
            <Usuario />
            <Sugestoes />
        </div>
    )
}