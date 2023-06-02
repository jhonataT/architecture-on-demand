import { ArchExcludedListContainer } from "../container/ArchExcludedListContainer";
import { ArchNewServicesContainer } from "../container/ArchNewServicesContainer";
import { ArchRefusedListContainer } from "../container/ArchRefusedListContainer";
import { ArchServiceListContainer } from "../container/ArchServiceListContainer";
import { ClientNewRequestContainer } from "../container/ClientNewRequestContainer";
import { ClientRequestListContainer } from "../container/ClientRequestListContainer";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export const userRoutes = [
    {
        path: '*',
        component: () => <NotFoundScreen /> // 
    },
    {
        path: '/architect/list',
        access: ['ACHITECT'],
        component: () => <ArchServiceListContainer />
    },
    {
        path: '/architect/services',
        access: ['ACHITECT'],
        component: () => <ArchNewServicesContainer />
    },
    {
        path: '/architect/services/refused',
        access: ['ACHITECT'],
        component: () => <ArchRefusedListContainer />
    },
    {
        path: '/architect/services/excluded',
        access: ['ACHITECT'],
        component: () => <ArchExcludedListContainer />
    },
    {
        path: '/client',
        access: ['CLIENT'],
        component: () => <ClientNewRequestContainer />
    },
    {
        path: '/client/requests',
        access: ['CLIENT'],
        component: () => <ClientRequestListContainer />
    },
];
