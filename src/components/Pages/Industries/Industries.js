import React from 'react'

import './Industries.css'
import { industries } from './IndustriesData'
import {Modal, Button, Icon} from 'react-materialize'

export default function Industries() {

	const industriesList = industries.map(industry => {
		return 	  <div class="row">
								<div class="col s12 l4">
									<div class="card">
										<div class="card-image">
											<img src={industry.imgUrl} alt={industry.title} />
											<span class="card-title">{industry.title}</span>
										</div>
										<div class="card-content">
											<p>I am a very simple card. I am good at containing small bits of information.
											I am convenient because I require little markup to use effectively.</p>
										</div>
										<div class="card-action">
											<a href="#">This is a link</a>
										</div>
									</div>
								</div>
							</div>
	})

	return (
		<div className="">
			<h1>Industries</h1>
			<div className="row">
				<div className="col s12 blue-grey lighten-4">
					<div className="content">
						<div className="row">
							{industriesList}
							<a className="btn blue">Add industry</a>
							{/* <Modal
								header='Modal Header'
								trigger={<Button className="btn small green" waves='light'>Edit</Button>}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.</p>
							</Modal> 
							<Modal
								header='Delete item. Are you sure?' className="red-text center"
								paddingTop='10%'
								trigger={<Button className="btn small red" waves='light'>Delete</Button>}>
								
								<button className="btn blue">Cancel</button>
								<button className="btn red">Delete</button>
							</Modal>   */}
						</div>
					</div>
				</div>		
			</div>
		</div>

		

	
	)
}
