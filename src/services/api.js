const BASE_URL = 'http://localhost:5102/api'

async function request(path, { method = 'GET', body } = {}) {
    const res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined
    })

    if (!res.ok) {
        let msg = `Error ${res.status}`
        try {
            const data = await res.json()
            msg = data?.title || data?.message || JSON.stringify(data)
        } catch {
            msg = await res.text()
        }
        throw new Error(msg || 'Error de servidor')
    }

    if (res.status === 204) return null
    return res.json()
}

export const api = {
    get: (path) => request(path),
    post: (path, body) => request(path, { method: 'POST', body }),
    put: (path, body) => request(path, { method: 'PUT', body }),
    delete: (path) => request(path, { method: 'DELETE' })
}