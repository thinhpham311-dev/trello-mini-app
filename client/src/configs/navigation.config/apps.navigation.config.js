import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from '../../constants/navigation.constant'

const appsNavigationConfig = [
	{
		key: 'apps',
		path: '',
		title: 'APPS',
		translateKey: 'nav.apps',
		icon: 'apps',
		type: NAV_ITEM_TYPE_TITLE,
		subMenu: [
			{
				key: 'apps.project',
				path: '',
				title: 'Project',
				translateKey: 'nav.appsProject.project',
				icon: 'project',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'appsProject.dashboard',
						path: `/project/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsProject.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsProject.projectList',
						path: `/project/project-list`,
						title: 'Project List',
						translateKey: 'nav.appsProject.projectList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsProject.scrumBoard',
						path: `/project/scrum-board`,
						title: 'Scrum Board',
						translateKey: 'nav.appsProject.scrumBoard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsProject.issue',
						path: `/project/issue`,
						title: 'Issue',
						translateKey: 'nav.appsProject.issue',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'apps.crm',
				path: '',
				title: 'CRM',
				translateKey: 'nav.appsCrm.crm',
				icon: 'crm',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'appsCrm.dashboard',
						path: `/crm/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsCrm.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrm.calendar',
						path: `/crm/calendar`,
						title: 'Calendar',
						translateKey: 'nav.appsCrm.calendar',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrm.customers',
						path: `/crm/customers`,
						title: 'Customers',
						translateKey: 'nav.appsCrm.customers',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrm.customerDetails',
						path: `/crm/customer-details?id=8`,
						title: 'Customer Details',
						translateKey: 'nav.appsCrm.customerDetails',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrm.mail',
						path: `/crm/mail`,
						title: 'Mail',
						translateKey: 'nav.appsCrm.mail',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'apps.sales',
				path: '',
				title: 'Sales',
				translateKey: 'nav.appsSales.sales',
				icon: 'sales',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'appsSales.dashboard',
						path: `/sales/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsSales.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsSales.productList',
						path: `/sales/product-list`,
						title: 'Product List',
						translateKey: 'nav.appsSales.productList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsSales.productEdit',
						path: `/sales/product-edit/12`,
						title: 'Product Edit',
						translateKey: 'nav.appsSales.productEdit',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsSales.productNew',
						path: `/sales/product-new`,
						title: 'New Product',
						translateKey: 'nav.appsSales.productNew',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsSales.orderList',
						path: `/sales/order-list`,
						title: 'Order List',
						translateKey: 'nav.appsSales.orderList',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsSales.orderDetails',
						path: `/sales/order-details/95954`,
						title: 'Order Details',
						translateKey: 'nav.appsSales.orderDetails',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'apps.crypto',
				path: '',
				title: 'Crypto',
				translateKey: 'nav.appsCrypto.crypto',
				icon: 'crypto',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'appsCrypto.dashboard',
						path: `/crypto/dashboard`,
						title: 'Dashboard',
						translateKey: 'nav.appsCrypto.dashboard',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrypto.portfolio',
						path: `/crypto/portfolio`,
						title: 'Portfolio',
						translateKey: 'nav.appsCrypto.portfolio',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrypto.market',
						path: `/crypto/market`,
						title: 'Market',
						translateKey: 'nav.appsCrypto.market',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsCrypto.wallets',
						path: `/crypto/wallets`,
						title: 'Wallets',
						translateKey: 'nav.appsCrypto.wallets',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'apps.knowledgeBase',
				path: '',
				title: 'Knowledge Base',
				translateKey: 'nav.appsknowledgeBase.knowledgeBase',
				icon: 'knowledgeBase',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'appsknowledgeBase.helpCenter',
						path: `/knowledge-base/help-center`,
						title: 'Help Center',
						translateKey: 'nav.appsknowledgeBase.helpCenter',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.article',
						path: `/knowledge-base/article?id=rZjCbSyae5`,
						title: 'Article',
						translateKey: 'nav.appsknowledgeBase.article',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.manageArticles',
						path: `/knowledge-base/manage-articles`,
						title: 'Manage Articles',
						translateKey: 'nav.appsknowledgeBase.manageArticles',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsknowledgeBase.editArticle',
						path: `/knowledge-base/edit-article?id=rZjCbSyae5&categoryLabel=Survey&categoryValue=survey`,
						title: 'Edit Article',
						translateKey: 'nav.appsknowledgeBase.editArticle',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'apps.account',
				path: '',
				title: 'Account',
				translateKey: 'nav.appsAccount.account',
				icon: 'account',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'appsAccount.settings',
						path: `/account/settings/profile`,
						title: 'Settings',
						translateKey: 'nav.appsAccount.settings',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsAccount.invoice',
						path: `/account/invoice/36223`,
						title: 'Invoice',
						translateKey: 'nav.appsAccount.invoice',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsAccount.activityLog',
						path: `/account/activity-log`,
						title: 'Activity Log',
						translateKey: 'nav.appsAccount.activityLog',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'appsAccount.kycForm',
						path: `/account/kyc-form`,
						title: 'KYC Form',
						translateKey: 'nav.appsAccount.kycForm',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
		]
	}
]

export default appsNavigationConfig