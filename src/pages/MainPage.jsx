import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../App'
import Pagination from '../components/Pagin/Pagination'
import Trips from '../components/Trips'
const MainPage = () => {
	const [data, setData] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	/* const dispatch = useDispatch() */
	const mytoken = localStorage.getItem('token')
	const token = mytoken.replace(/['"]+/g, '')
	useEffect(() => {
		axios
			.get(
				`https://transstage1.iwayex.com/transnextgen/v3/orders/trips?page=${currentPage}&items_on_page=25`,
				{
					headers: {
						'content-type': 'application/json',
						authorization: `Bearer ${token}`,
					},
				}
			)
			.then(response => setData(response.data.result.orders))
	}, [currentPage])

	return (
		<div className={styles.container}>
			<h1>Список поездок</h1>
			<Trips data={data} />
			<Pagination onChangePage={number => setCurrentPage(number)} />
		</div>
	)
}

export default MainPage
