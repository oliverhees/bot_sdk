// assets
import {
    IconSchool,
    IconHeadset,
    IconHierarchy,
    IconBuildingStore,
    IconKey,
    IconTool,
    IconLock,
    IconRobot,
    IconVariable
} from '@tabler/icons'

// constant
const icons = { IconSchool, IconHeadset, IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconRobot, IconVariable }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: 'Chatflows',
            type: 'item',
            url: '/chatflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marktplatz',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            title: 'Tools',
            type: 'item',
            url: '/tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'tutorials',
            title: 'Tutorials',
            type: 'item',
            url: '/tutorials',
            icon: icons.IconSchool,
            breadcrumbs: true
        },
        {
            id: 'assistants',
            title: 'Assistenten',
            type: 'item',
            url: '/assistants',
            icon: icons.IconRobot,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: 'Zugänge',
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        {
            id: 'variables',
            title: 'Variablen',
            type: 'item',
            url: '/variables',
            icon: icons.IconVariable,
            breadcrumbs: true
        },
        {
            id: 'apikey',
            title: 'API Keys',
            type: 'item',
            url: '/apikey',
            icon: icons.IconKey,
            breadcrumbs: true
        },
        {
            id: 'support',
            title: 'Support',
            type: 'item',
            url: '/support',
            icon: icons.IconHeadset,
            breadcrumbs: true
        }
    ]
}

export default dashboard
