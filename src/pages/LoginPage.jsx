import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../store/userSlice'

const LoginPage = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const handleLoginEvent = e => {
		e.preventDefault()
		let userCredentials = {
			login,
			password,
		}
		dispatch(loginUser(userCredentials))
	}
	return (
		<>
			<p>LoginPage</p>
			<form onSubmit={handleLoginEvent}>
				<label>Login</label>
				<input
					type='text'
					required
					value={login}
					onChange={e => setLogin(e.target.value)}
				/>
				<label>Пароль</label>
				<input
					type='password'
					required
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<br />
				<button type='submit'>Login</button>
			</form>
		</>
	)
}

export default LoginPage
