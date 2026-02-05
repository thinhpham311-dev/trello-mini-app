import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_ITEM } from '../../constants/navigation.constant'

const pagesNavigationConfig = [
	{
		key: 'pages',
		path: '',
		title: 'PAGES',
		translateKey: 'nav.pages.pages',
		icon: 'pages',
		type: NAV_ITEM_TYPE_TITLE,
		subMenu: [
			{
				key: 'pages.welcome',
				path: `/welcome`,
				title: 'Welcome',
				translateKey: 'nav.pages.welcome',
				icon: 'welcome',
				type: NAV_ITEM_TYPE_ITEM,
				subMenu: []
			},
			{
				key: 'pages.accessDenied',
				path: '/access-denied',
				title: 'Access Denied',
				translateKey: 'nav.pages.accessDenied',
				icon: 'accessDenied',
				type: NAV_ITEM_TYPE_ITEM,
				subMenu: []
			},
		]
	}
]

export default pagesNavigationConfig