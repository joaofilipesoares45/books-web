import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { DataContext } from "../../context/DataContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import './index.css'

export default function Home() {

    const { usuarios } = useContext(DataContext)

    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('shelflogin:user')) {
            navigate('/login')
        }
    }, [usuarios, navigate])


    const logOut = () => {
        localStorage.removeItem('shelflogin:user')
    }

    return (
        <div className="page home">
            <nav className="top-nav">
                <a href="/home">Shelf <FontAwesomeIcon icon={faHome} /></a>
                <nav>
                    <button>Categorias</button>
                    <button>Ofertas</button>
                    <button>Populares</button>
                    <button>Semanal</button>
                </nav>

                <div className="login-nav">
                    <button onClick={logOut}>logOut</button>
                    <button onClick={() => navigate('/free')}>Teste Grátis</button>
                </div>
            </nav>

            <section>
                <h1>Home</h1>
            </section>
        </div>
    )
}