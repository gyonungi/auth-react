import { Route, Routes } from 'react-router'
import './App.scss'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
