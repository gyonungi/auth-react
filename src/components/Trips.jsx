/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './trips.module.scss'
const Trips = ({ data }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [selectedOrder, setSelectedOrder] = useState(null)
	const openModal = order => {
		setSelectedOrder(order)
		setModalOpen(true)
	}
	return (
		<>
			<table className={styles.main_table}>
				<thead>
					<tr>
						<th>Машина</th>
						<th>Цена</th>
						<th>Откуда</th>
						<th>Куда</th>
						<th>Имя</th>
						<th>Номер Телефона</th>
					</tr>
				</thead>
				<tbody>
					{data.map(order => {
						return (
							<tr key={order.id} onClick={() => openModal(order)}>
								<td> {order.car_data.models}</td>
								<td>{order.price.price} ₽</td>
								<td>{order.location_address}</td>
								<td>{order.destination_address}</td>

								{order.passengers.map(passenger => (
									<>
										<td>{passenger.name}</td>
										<td>{passenger.phone}</td>
									</>
								))}
							</tr>
						)
					})}
				</tbody>
			</table>

			{modalOpen && selectedOrder && (
				<div className={styles.modal}>
					<div
						className={styles.modalContent}
						onClick={e => e.stopPropagation()}
					>
						<h2>Детали заказа</h2>
						<p>Сколько людей: {selectedOrder.passengers_number}</p>
						<p>
							Комментарий к поездке:{' '}
							{selectedOrder.notes ? selectedOrder.notes : 'нет комментария'}
						</p>
						<button onClick={() => setModalOpen(!true)}>Закрыть</button>
					</div>
				</div>
			)}
		</>
	)
}

export default Trips
