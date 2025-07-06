import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'
import { useNavigate } from "react-router";

export default function Landing() {

    const navigate = useNavigate()
    const submit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="page landing">
            <nav className="top-nav">
                <a href="/">Shelf <FontAwesomeIcon icon={faBook} /></a>
                <nav>
                    <button>Categorias</button>
                    <button>Ofertas</button>
                    <button>Populares</button>
                    <button>Semanal</button>
                </nav>

                <div className="login-nav">
                    <button onClick={() => navigate('/login')}>login</button>
                    <button onClick={() => navigate('/free')}>Teste Grátis</button>
                </div>
            </nav>

            <section>
                <div className="main-content">
                    <form onSubmit={submit}>
                        <h1>Encontre o livro que você procura.</h1>
                        <span>O melhor site de busca para amantes de leitura</span>
                        <div>
                            <input type="text" placeholder="Digite o titulo do livro!"/>
                            <button>Buscar</button>
                        </div>
                    </form>
                    <div className="img">
                        <img src="/books-web/banner.jpg" alt="" />
                    </div>
                </div>

                <div className="roller">

                </div>
            </section>
        </div>
    )
}