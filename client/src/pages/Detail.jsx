import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteItem, getItem } from '../services/itemsApi'

export default function Detail() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [r, setR] = useState(null)
    const [err, setErr] = useState('')

    useEffect(() => {
        getItem(id)
            .then(setR)
            .catch((e) => setErr(e.message))
    }, [id])

    const remove = async () => {
        try {
            await deleteItem(id)
            navigate('/designs')
        } catch (e) {
            setErr(e.message)
        }
    }

    if (!r && !err) {
        return <p className="muted">Loading…</p>
    }
    if (err && !r) {
        return <p className="error">{err}</p>
    }

    return (
        <div className="detail">
            <div className={`preview-swatch preview-swatch--${r.accent_trim} detail-hero`}>
                <div className="preview-icon detail-icon">{r.preview_icon}</div>
                <h1 className="detail-title">{r.name}</h1>
                <p className="detail-price">${r.total_price}</p>
            </div>
            <dl className="specs">
                <div>
                    <dt>Upper</dt>
                    <dd>{r.upper_material}</dd>
                </div>
                <div>
                    <dt>Sole</dt>
                    <dd>{r.sole_style}</dd>
                </div>
                <div>
                    <dt>Laces</dt>
                    <dd>{r.lace_style}</dd>
                </div>
                <div>
                    <dt>Trim</dt>
                    <dd>{r.accent_trim}</dd>
                </div>
            </dl>
            {err ? <p className="error">{err}</p> : null}
            <div className="detail-actions">
                <Link to={`/edit/${r.id}`} className="btn btn-primary">
                    Edit pair
                </Link>
                <button type="button" className="btn btn-ghost" onClick={remove}>
                    Delete
                </button>
                <Link to="/designs" className="btn btn-ghost">
                    Back to collection
                </Link>
            </div>
        </div>
    )
}
