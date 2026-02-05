import React from 'react'
import classNames from 'classnames'
import { ScrollBar } from '../ui'
import PropTypes from 'prop-types'
import { 
	SIDE_NAV_WIDTH,
	NAV_MODE_THEMED, 
} from '../../constants/theme.constant'

import useResponsive from '../../utils/hooks/useResponsive'
import { useSelector } from 'react-redux'

const sideNavStyle = {
	width: SIDE_NAV_WIDTH,
	minWidth: SIDE_NAV_WIDTH
}

const SideNav = () => {

	const themeColor = useSelector(state => state.theme.themeColor)
	const primaryColorLevel = useSelector(state => state.theme.primaryColorLevel)
	const navMode = useSelector(state => state.theme.navMode)

	const { larger } = useResponsive()

	const sideNavColor = () => {
		if(navMode === NAV_MODE_THEMED) {
			return `bg-${themeColor}-${primaryColorLevel} side-nav-${navMode}`
		}
		return `side-nav-${navMode}`
	}

	return (
		<>
			{larger.md && (
				<div 
					style={sideNavStyle } 
					className={
						classNames(
							'side-nav',
							sideNavColor(),
						)
					}
				>
						<div className="side-nav-content">
								<p>Sidebar</p>
						</div>
				</div>
			)}
		</>
	)
}

SideNav.propTypes = {
	themed: PropTypes.bool,
	darkMode: PropTypes.bool, 
	themeColor: PropTypes.string
}

SideNav.defaultProps = {
	themed: false,
	darkMode: false,
	themeColor: ''
}

export default SideNav
