import React, { memo, useMemo, lazy, Suspense } from 'react'
import  Loading  from '../shared/Loading'
import { useSelector } from 'react-redux'
import { 
	LAYOUT_TYPE_MODERN, 
	LAYOUT_TYPE_SIMPLE
} from '../../constants/theme.constant'

const layouts = {
	[LAYOUT_TYPE_MODERN]: lazy(() => import('./ModernLayout')),
	[LAYOUT_TYPE_SIMPLE]: lazy(() => import('./SimpleLayout')),

}

const Layout = () => {

	const layoutType = useSelector((state) => state.theme.layout.type)
	const AppLayout = useMemo(() => {
		return layouts[layoutType]
	}, [layoutType])

	return (
		<Suspense 
			fallback={
				<div className="flex flex-auto flex-col h-[100vh]">
					<Loading loading={true} />
				</div>
			}
		>
			<AppLayout />
		</Suspense>
	)
}

export default memo(Layout)