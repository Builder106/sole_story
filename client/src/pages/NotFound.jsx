import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="not-found">
            <p className="not-found-code">404</p>
            <h1 className="page-title">Page not found</h1>
            <p className="page-sub">That route does not exist. Head back to design or your collection.</p>
            <div className="not-found-actions">
                <Link to="/" className="btn btn-primary">
                    Design a pair
                </Link>
                <Link to="/designs" className="btn btn-ghost">
                    View collection
                </Link>
            </div>
        </div>
    )
}
