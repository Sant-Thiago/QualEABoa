import { Bell } from "lucide-react"
import styles from './Header.module.css';

export default function Header({
    text
}) {
    return(
        <header className={styles.main}>
            <h1 className={styles.text}>{text}</h1>
            <a href="/" className={styles.notification}>
                <Bell size={22} />
            </a>
        </header>
    )
}
