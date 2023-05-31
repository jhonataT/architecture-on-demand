import { ArchExcludedListContainer } from "../container/ArchExcludedListContainer";
import { ArchNewServicesContainer } from "../container/ArchNewServicesContainer";
import { ArchRefusedListContainer } from "../container/ArchRefusedListContainer";
import { ArchServiceListContainer } from "../container/ArchServiceListContainer";
import { ClientNewRequestContainer } from "../container/ClientNewRequestContainer";
import { ClientRequestListContainer } from "../container/ClientRequestListContainer";

export const userRoutes = [
    {
        path: '/',
        access: ['USER_ARCHITECT'],
        component: () => <ArchServiceListContainer />
    },
    {
        path: '/architect/services/new',
        access: ['USER_ARCHITECT'],
        component: () => <ArchNewServicesContainer />
    },
    {
        path: '/architect/services',
        access: ['USER_ARCHITECT'],
        component: () => <ArchServiceListContainer />
    },
    {
        path: '/architect/services/refused',
        access: ['USER_ARCHITECT'],
        component: () => <ArchRefusedListContainer />
    },
    {
        path: '/architect/services/excluded',
        access: ['USER_ARCHITECT'],
        component: () => <ArchExcludedListContainer />
    },
    {
        path: '/client/architects',
        access: ['USER_CLIENT'],
        component: () => <ClientNewRequestContainer />
    },
    {
        path: '/client/requests',
        access: ['USER_CLIENT'],
        component: () => <ClientRequestListContainer />
    },
];
