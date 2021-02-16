import React from 'react'

import './Industries.css'
import { industries } from './IndustriesData'

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
											<a className="btn-small green modal-trigger" href="#edit-modal">Edit</a> 
											<a className="btn-small red">Delete</a> 
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

			{/* Edit modal */}
				<div id="edit-modal" className="modal">
				<div className="modal-content">
					<h4>Modal Header</h4>
					<p>A bunch of text</p>
				</div>
				<div className="modal-footer">
					<a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
				</div>
			</div>
		</div>



	
	)
}
