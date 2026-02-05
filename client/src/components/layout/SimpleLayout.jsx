import React from 'react'
import Header from '../template/Header'
import { 
	NAV_MODE_DARK, 
	NAV_MODE_THEMED, 
	NAV_MODE_TRANSPARENT,
	LOGO_X_GUTTER,
} from '../../constants/theme.constant'
import Logo from '../template/Logo'
import { useSelector } from 'react-redux'
import View from '../../views'
import SideNav from '../template/SideNav'

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
		HeaderActionsEnd
		</>
	)
}

const SimpleLayout = () => {
	return (
		<div className="app-layout-simple flex flex-auto flex-col min-h-screen">
			<div className="flex flex-auto min-w-0">
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
					<Header
						className="shadow dark:shadow-2xl"
						headerStart={<HeaderActionsStart />}
						headerEnd={<HeaderActionsEnd />} 
					/>
					<div className='p-10'>
					<View pageContainerType="contained" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SimpleLayout
