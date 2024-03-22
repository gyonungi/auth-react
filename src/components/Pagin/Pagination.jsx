import ReactPaginate from 'react-paginate'
import styles from './Pagination.module.scss'
// eslint-disable-next-line react/prop-types
const Pagination = ({ onChangePage }) => {
	return (
		<ReactPaginate
			className={styles.root}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={event => onChangePage(event.selected + 1)}
			pageRangeDisplayed={25}
			pageCount={3}
			renderOnZeroPageCount={null}
		/>
	)
}

export default Pagination
