import { Navigate } from "react-router";
import { Header } from "../components/Header";
import { useLoggedUser } from "../core/hooks/useLoggedUser";

// Gerenciamento de rotas privadas (caso não esteja logado, efetua um redirect para a loginScreen).
export const PrivateRouter = ({ Component, access, ...props }) => {
    const { loggedUser, token } = useLoggedUser();

    if(!token || !loggedUser.email) {
        return <Navigate to='/authentication/login' />
    }

    return <main>
        <Header
            username={loggedUser?.fullname.split(' ')[0]}
            userType={loggedUser?.role.toLowerCase()}
        />
        <Component {...props} />
    </main>
}