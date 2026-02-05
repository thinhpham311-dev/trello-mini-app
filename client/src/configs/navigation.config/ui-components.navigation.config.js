import { NAV_ITEM_TYPE_TITLE, NAV_ITEM_TYPE_COLLAPSE, NAV_ITEM_TYPE_ITEM } from '../../constants/navigation.constant'

const uiComponentNavigationConfig = [
	{
		key: 'uiComponent',
		path: '',
		title: 'Ui Component',
		translateKey: 'nav.uiComponents',
		icon: 'uiComponents',
		type: NAV_ITEM_TYPE_TITLE,
		subMenu: [
			{
				key: 'uiComponent.common',
				path: '',
				title: 'Common',
				translateKey: 'nav.uiComponentsCommon.common',
				icon: 'common',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'uiComponent.common.button',
						path: `/button`,
						title: 'Button',
						translateKey: 'nav.uiComponentsCommon.button',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.common.grid',
						path: `/grid`,
						title: 'Grid',
						translateKey: 'nav.uiComponentsCommon.grid',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.common.typography',
						path: `/typography`,
						title: 'Typography',
						translateKey: 'nav.uiComponentsCommon.typography',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.common.icons',
						path: `/icons`,
						title: 'Icons',
						translateKey: 'nav.uiComponentsCommon.icons',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'uiComponent.feedback',
				path: '',
				title: 'Feedback',
				translateKey: 'nav.uiComponentsFeeback.feedback',
				icon: 'feedback',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'uiComponent.feedback.alert',
						path: `/alert`,
						title: 'Alert',
						translateKey: 'nav.uiComponentsFeeback.alert',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.feedback.dialog',
						path: `/dialog`,
						title: 'Dialog',
						translateKey: 'nav.uiComponentsFeeback.dialog',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.feedback.drawer',
						path: `/drawer`,
						title: 'Drawer',
						translateKey: 'nav.uiComponentsFeeback.drawer',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.feedback.progress',
						path: `/progress`,
						title: 'Progress',
						translateKey: 'nav.uiComponentsFeeback.progress',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.feedback.skeleton',
						path: `/skeleton`,
						title: 'Skeleton',
						translateKey: 'nav.uiComponentsFeeback.skeleton',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.feedback.spinner',
						path: `/spinner`,
						title: 'Spinner',
						translateKey: 'nav.uiComponentsFeeback.spinner',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.feedback.toast',
						path: `/toast`,
						title: 'Toast',
						translateKey: 'nav.uiComponentsFeeback.toast',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'uiComponent.dataDisplay',
				path: '',
				title: 'Data Display',
				translateKey: 'nav.uiComponentsDataDisplay.dataDisplay',
				icon: 'dataDisplay',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'uiComponent.dataDisplay.avatar',
						path: `/avatar`,
						title: 'Avatar',
						translateKey: 'nav.uiComponentsDataDisplay.avatar',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.badge',
						path: `/badge`,
						title: 'Badge',
						translateKey: 'nav.uiComponentsDataDisplay.badge',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.calendar',
						path: `/calendar`,
						title: 'Calendar',
						translateKey: 'nav.uiComponentsDataDisplay.calendar',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.cards',
						path: `/cards`,
						title: 'Cards',
						translateKey: 'nav.uiComponentsDataDisplay.cards',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.table',
						path: `/table`,
						title: 'Table',
						translateKey: 'nav.uiComponentsDataDisplay.table',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.tag',
						path: `/tag`,
						title: 'Tag',
						translateKey: 'nav.uiComponentsDataDisplay.tag',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.timeline',
						path: `/timeline`,
						title: 'Timeline',
						translateKey: 'nav.uiComponentsDataDisplay.timeline',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.dataDisplay.tooltip',
						path: `/tooltip`,
						title: 'Tooltip',
						translateKey: 'nav.uiComponentsDataDisplay.tooltip',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'uiComponent.forms',
				path: '',
				title: 'Forms',
				translateKey: 'nav.uiComponentsForms.forms',
				icon: 'forms',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'uiComponent.forms.checkbox',
						path: `/checkbox`,
						title: 'Checkbox',
						translateKey: 'nav.uiComponentsForms.checkbox',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.datePicker',
						path: `/date-picker`,
						title: 'Date picker',
						translateKey: 'nav.uiComponentsForms.datePicker',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.formControl',
						path: `/form-control`,
						title: 'Form control',
						translateKey: 'nav.uiComponentsForms.formControl',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.input',
						path: `/input`,
						title: 'Input',
						translateKey: 'nav.uiComponentsForms.input',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.inputGroup',
						path: `/input-group`,
						title: 'Input Group',
						translateKey: 'nav.uiComponentsForms.inputGroup',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.radio',
						path: `/radio`,
						title: 'Radio',
						translateKey: 'nav.uiComponentsForms.radio',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.segment',
						path: `/segment`,
						title: 'Segment',
						translateKey: 'nav.uiComponentsForms.segment',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.select',
						path: `/select`,
						title: 'Select',
						translateKey: 'nav.uiComponentsForms.select',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.switcher',
						path: `/switcher`,
						title: 'Switcher',
						translateKey: 'nav.uiComponentsForms.switcher',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.timeInput',
						path: `/time-input`,
						title: 'Time Input',
						translateKey: 'nav.uiComponentsForms.timeInput',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.forms.upload',
						path: `/upload`,
						title: 'Upload',
						translateKey: 'nav.uiComponentsForms.upload',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'uiComponent.navigation',
				path: '',
				title: 'Navigation',
				translateKey: 'nav.uiComponentsNavigation.navigation',
				icon: 'navigation',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'uiComponent.navigation.dropdown',
						path: `/dropdown`,
						title: 'Dropdown',
						translateKey: 'nav.uiComponentsNavigation.dropdown',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.navigation.menu',
						path: `/menu`,
						title: 'Menu',
						translateKey: 'nav.uiComponentsNavigation.menu',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.navigation.pagination',
						path: `/pagination`,
						title: 'Pagination',
						translateKey: 'nav.uiComponentsNavigation.pagination',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.navigation.steps',
						path: `/steps`,
						title: 'Steps',
						translateKey: 'nav.uiComponentsNavigation.steps',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.navigation.tabs',
						path: `/tabs`,
						title: 'Tabs',
						translateKey: 'nav.uiComponentsNavigation.tabs',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			},
			{
				key: 'uiComponent.graph',
				path: '',
				title: 'Graph',
				translateKey: 'nav.uiComponentsGraph.graph',
				icon: 'graph',
				type: NAV_ITEM_TYPE_COLLAPSE,
				subMenu: [
					{
						key: 'uiComponent.graph.charts',
						path: `/graph/charts`,
						title: 'Charts',
						translateKey: 'nav.uiComponentsGraph.charts',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
					{
						key: 'uiComponent.graph.maps',
						path: `/graph/maps`,
						title: 'Maps',
						translateKey: 'nav.uiComponentsGraph.maps',
						icon: '',
						type: NAV_ITEM_TYPE_ITEM,
						subMenu: []
					},
				]
			}
		]
	},
]

export default uiComponentNavigationConfig