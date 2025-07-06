import { createContext, useState } from "react";
import { closeModal, openModal } from "../utils/functions";


export const DataContext = createContext();

export function DataProvider({ children }) {

    const [component, setComponent] = useState()

    const [usuarioAtual, setUsuarioAtual] = useState()
    const [usuarios, setUsuarios] = useState([])

    const [dataNotification, setDataNotification] = useState({})

    const newNotification = (type, title, text, fn) => {
        switch (type) {
            case 1:
                setDataNotification({ type, title, text })
                break;
            case 2:
                setDataNotification({ type, title, text, fn })
                break;
        }
        openModal('notification')
        if (type !== 2) {
            setTimeout(() => {
                setDataNotification({})
                closeModal('notification')
            }, 3000)
        }
    }

    const value = {
        usuarioAtual,
        setUsuarioAtual,

        usuarios,
        setUsuarios,

        component,
        setComponent,

        dataNotification,
        setDataNotification,
        newNotification,
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}