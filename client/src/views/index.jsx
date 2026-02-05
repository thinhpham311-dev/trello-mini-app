import React, { Suspense } from 'react'
import { Loading } from '../components/shared'

const AllRoutes = props => {


	return (
		<>Dashboard</>
	)

} 

const Views = props => {
	return (
		<Suspense fallback={<Loading loading={true} />}>
			<AllRoutes {...props} />
		</Suspense>
	)
}

export default Views