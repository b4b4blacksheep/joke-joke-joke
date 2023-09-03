import { Container } from 'react-bootstrap';

import './style.css'

export default function AppHomePage() {
	return (
		<Container>
			<div className="text-center d-flex align-items-center py-5 my-5">
				<h1 class="display-1">404 | This page could not be found</h1>
			</div>
		</Container>
	)
}