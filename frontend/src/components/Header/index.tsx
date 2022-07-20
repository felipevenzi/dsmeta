import logo from '../../assets/img/V-ZION-Lion.png';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>V.Zion</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/vizionholding"> @vizionholding</a>
                </p>
            </div>
        </header>
    )
}

export default Header;