import styles from './Navbar.module.css';


export default function Navbar() {
    return(
        <nav className={styles.main}>
            <button alt="Home">🏠</button>
            <button alt="List">📋</button>
            <button alt="Maps">🗺️</button>
            <button alt="Social">👥</button>
            <button alt="Profile">👤</button>
        </nav>
    )
}