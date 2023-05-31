import { Navigate } from "react-router";
import { Header } from "../components/Header";

// Gerenciamento de rotas privadas (caso não esteja logado, efetua um redirect para a loginScreen).
export const PrivateRouter = ({ Component, ...props }) => {
    const isUserLogged = false;

    if(!isUserLogged) {
        return <Navigate to='/authentication/login' />
    }

    return <main>
        <Header username='Jhonata' userType='client'/>
        <Component {...props} />
    </main>
}