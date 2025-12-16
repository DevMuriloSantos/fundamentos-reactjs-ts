import styles from './header.module.css'; // impede que ocorra interferência de estilos!

import Icon from '../assets/Ignite-simbol.png';

function Header() {
    return (
        <header className={styles.header}>
            <img src={Icon} alt="Logo do Ignite" />
            <strong><h2>Ignite Feed</h2></strong>
        </header>
    );
}

export default Header;