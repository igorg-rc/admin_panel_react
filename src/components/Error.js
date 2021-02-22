import React from 'react'
import { technologies } from '../components/Pages/Technologies/TechnologiesData_'
import { Button, Modal } from 'react-materialize'

export default function Error() {

	// const list = Object.values(technologies).map(i => {
	// 	console.log(i.title)
	// 	return `${i.title}: ${JSON.stringify(i.details)}`, Object.values(i.details).map(technology => {
	// 		console.log(technology);
	// 		return <ul><li>{ technology }</li></ul>
	// 	}); 
	// })

 // =============== Close solution ========================

 
	return (
		<div>
			<h1>Ooops! Requsted page does not exist.</h1>

		</div>
	)
}
