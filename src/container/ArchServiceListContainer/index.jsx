import { useEffect, useState } from "react";
import { ArchServiceListScreen } from "../../screens/ArchServiceListScreen";
import { useLoggedUser } from "../../core/hooks/useLoggedUser";
import { Api } from "../../core/services/api";
import { customToast } from "../../components/Toast";

export const ArchServiceListContainer = () => {
    const { loggedUser, token } = useLoggedUser();
    const [reload, setReload] = useState(true);
    const [availableServices, setAvailableServices] = useState([]);

    useEffect(() => {
        if(reload) {
            Api(token).get(`/work-requests/architect/${loggedUser?.id}`)
            .then(response => {
                if(response.data) {
                    setAvailableServices(response.data);
                    setReload(false);
                } else {
                    throw new Error('Erro ao buscar dados')
                }
            })
            .catch(error => {
                customToast(`Erro ao buscar dados: ${error.message}`, 'error');
                setReload(false);
            })
        }
    }, [reload]);

    return <ArchServiceListScreen data={availableServices} />
}