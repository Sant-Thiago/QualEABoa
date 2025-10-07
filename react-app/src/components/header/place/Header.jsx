import { ArrowLeft } from "lucide-react"
import styles from './Header.module.css';

export default function Header({
    text
}) {
    return(
        <header className={styles.main}>
            <a href="/" className={styles.arrow}>
                <ArrowLeft size={22} />
            </a>
            <h1 className={styles.text}>{text}</h1>
        </header>
    )
}
