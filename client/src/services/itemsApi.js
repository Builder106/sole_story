const API = '/api/customitems'

const json = async (res) => {
    if (!res.ok) {
        const body = await res.json().catch(() => ({ error: 'Request failed.' }))
        throw new Error(body.error || 'Request failed.')
    }
    return res.json()
}

export const listItems = () => fetch(API).then(json)
export const getItem = (id) => fetch(`${API}/${id}`).then(json)
export const createItem = (payload) =>
    fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(json)
export const updateItem = (id, payload) =>
    fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(json)
export const deleteItem = (id) => fetch(`${API}/${id}`, { method: 'DELETE' }).then(json)
