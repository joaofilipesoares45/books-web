
export const apiConnection = async (path, method, body) => {
    const link = `http://localhost:5501/${path}`
    let head = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: method.toUpperCase(),
        body: JSON.stringify(body)
    }

    try {
        return await fetch(link, head)
            .then(res => res.json())
            .then(data => {
                return data
            })
    } catch (e) {
        console.log(e);
        // setNotification(2, 'Erro', 'Servidor não está respondendo')
    }
}

export const openModal = (modalClass) => {
    const modal = document.querySelector(`.${modalClass}`)
    modal.setAttribute('open', '')
}

export const closeModal = (modalClass) => {
    if (!modalClass) {
        document.querySelectorAll('.modal').forEach(modal => modal.removeAttribute('open'))
    } else {
        document.querySelector(`.${modalClass}`).removeAttribute('open')
    }
}

export const formCaptureData = (form) => {
    const inputs = form.querySelectorAll('input')

    const data = {}
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i]
        if (input.value.length > 0) {
            data[input.name] = input.value
            if (input.getAttribute('type') === 'number') {
                data[input.name] = Number(input.value)
            }
        } else {
            input.setAttribute('wrong', '')
            setTimeout(() => {
                input.removeAttribute('wrong')
            }, 8000);
        }
    }

    return data
}

export const deleteAcount = async () => {
    const result = apiConnection('users', 'delete', { id: 14 }).then(data => { return data })

    console.log(result);
}
