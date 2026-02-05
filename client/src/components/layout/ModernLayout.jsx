import React from 'react'
import Header from '../template/Header'
import View from '../../views'
import MobileNav from '../template/MobileNav'
import { 
	NAV_MODE_DARK, 
	NAV_MODE_THEMED, 
	NAV_MODE_TRANSPARENT,
	LOGO_X_GUTTER,
} from '../../constants/theme.constant'
import Logo from '../template/Logo'
import { useSelector } from 'react-redux'

const HeaderActionsStart = () => {
	const navMode = useSelector(state => state.theme.navMode)
	const mode = useSelector(state => state.theme.mode)

	const logoMode = () => {
		if(navMode === NAV_MODE_THEMED) {
			return NAV_MODE_DARK
		}

		if(navMode === NAV_MODE_TRANSPARENT) {
			return mode
		}

		return navMode
	}

	return (
		<>
			<MobileNav />
			<Logo 
				imgClass="w-[36px] h-[36px]"
				mode={logoMode()} 
				type={'full'} 
				gutter={LOGO_X_GUTTER} 
			/>
		</>
	)
}

const HeaderActionsEnd = () => {
	return (
		<>
			header action end
		</>
	)
}

const ModernLayout = props => {
	return (
		<div className="app-layout-modern flex flex-auto flex-col">
			<div className="flex flex-auto min-w-0">
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
					<Header 
						className="border-b border-gray-200 dark:border-gray-700" 
						headerEnd={<HeaderActionsEnd />} 
						headerStart={<HeaderActionsStart />}
					/>
					<div className='p-10'>
					<View {...props} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ModernLayout