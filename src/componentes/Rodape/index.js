import './Rodape.css'

const Rodape = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'>
                        <img src='/imagens/fb.png' alt=""></img>
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target='_blank'>
                        <img src='/imagens/tw.png' alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src='/imagens/logo.png' alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Andre Stocco de Oliveira
            </p>
        </section>
    </footer>
    )
}

export default Rodape