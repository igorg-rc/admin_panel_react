import React from 'react'

import './Industries.css'
import { industries } from './IndustriesData'
import {Modal, Button, Icon} from 'react-materialize'

export default function Industries() {

	const industriesList = industries.map(industry => {
		return 	<div className="col s12">
								<div id="industry-item" className="row" style={{ paddingTop: '2vh' }}>
									<div className="valign-wrapper">
										<div className="col s12 m12 l4">
											<h5 className="item-title">{industry.title}</h5>
										</div>
										<div className="col s12 m12 l4">
											<img className="item-image" src={industry.imgUrl} alt={industry.title} />
										</div>
										<div className="col s12 m12 l4">
											<Modal
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
											</Modal>  
										</div>
									</div>
								</div>
							<hr />
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
						</div>
					</div>
				</div>		
			</div>
		</div>

		

	
	)
}
