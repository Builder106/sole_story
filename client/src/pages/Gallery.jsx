import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteItem, listItems } from '../services/itemsApi'

export default function Gallery() {
    const [rows, setRows] = useState([])
    const [err, setErr] = useState('')

    useEffect(() => {
        listItems()
            .then(setRows)
            .catch((e) => setErr(e.message))
    }, [])

    const remove = async (id) => {
        try {
            await deleteItem(id)
            setRows((prev) => prev.filter((r) => r.id !== id))
        } catch (e) {
            setErr(e.message)
        }
    }

    return (
        <div className="gallery">
            <h1 className="page-title">Your collection</h1>
            <p className="page-sub">Open a pair to edit details or remove it.</p>
            {err ? <p className="error">{err}</p> : null}
            {rows.length === 0 && !err ? <p className="empty">No pairs yet — start on Design.</p> : null}
            <div className="grid">
                {rows.map((r) => (
                    <article key={r.id} className="card">
                        <div className="card-icon">{r.preview_icon}</div>
                        <h2 className="card-title">{r.name}</h2>
                        <p className="card-meta">${r.total_price}</p>
                        <div className="card-actions">
                            <Link to={`/designs/${r.id}`} className="btn btn-small">
                                View
                            </Link>
                            <Link to={`/edit/${r.id}`} className="btn btn-small btn-ghost">
                                Edit
                            </Link>
                            <button type="button" className="btn btn-small btn-danger" onClick={() => remove(r.id)}>
                                Delete
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
