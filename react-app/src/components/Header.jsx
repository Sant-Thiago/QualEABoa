import { Bell } from "lucide-react"

export default function Header({
    text
}) {
    return(
        <header className="topbar">
            <h1>{text}</h1>
            <div className="top-right">
                <Bell size={22} />
                <a href="/" className="user-profile">aqui</a>
            {/* <div className="avatar">👩‍🦰</div> */}
            </div>
        </header>
    )
}
