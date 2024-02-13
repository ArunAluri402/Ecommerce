import { Routes } from "react-router-dom"

export const RouterWrapper = ({ children }) => {

    return <Routes>
        {children}
    </Routes>
}