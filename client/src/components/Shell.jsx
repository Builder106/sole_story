import { Link } from 'react-router-dom'

export default function Shell({ children }) {
    return (
        <div className="shell">
            <header className="topbar">
                <Link to="/" className="brand">
                    <span className="brand-mark">👟</span>
                    <span className="brand-text">Sole Story</span>
                </Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">
                        Design
                    </Link>
                    <Link to="/designs" className="nav-link nav-link-ghost">
                        Collection
                    </Link>
                </nav>
            </header>
            <main className="main">{children}</main>
        </div>
    )
}
