import React, { Suspense } from 'react'
import { Loading } from '../components/shared'

const Views = props => {
	return (
		<Suspense fallback={<Loading loading={true} />}>
            DashBoard
		</Suspense>
	)
}

export default Views