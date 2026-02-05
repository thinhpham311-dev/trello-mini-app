import { Provider, useSelector } from 'react-redux'

import { BrowserRouter  } from 'react-router-dom'
import Theme from './components/template/Theme'
import Layout from './components/layout'
import history from './history'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store'


function App() {


  return (
    	<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter history={history}>
				<Theme>
					<Layout/>
				</Theme>
				</BrowserRouter >
			</PersistGate>
		</Provider>

  )
}

export default App
