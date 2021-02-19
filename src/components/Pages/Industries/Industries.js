import React from 'react'

import './Industries.css'
import { industries } from './IndustriesData'
import {Modal, Button, Icon, TextInput, Textarea} from 'react-materialize'

export default function Industries() {

	const industriesList = industries.map(industry => {
		return 	    <div class="col s12 m6 l4">
									<div class="card">
										
										<div class="card-image">
											<img src={industry.imgUrl} alt={industry.title} />
										</div>
									</div>

									<div className="card">
										<div class="card-content indigo darken-1">
											<div className="row">
												<div className="col s8">
													<span class="card-title white-text left-align">{industry.title}</span>
												</div>
												<div className="col s4 flex">
													{/* <a href="#"><i className="material-icons indigo-text white-text right card-icons">create</i></a>
													<a href="#"><i className="material-icons indigo-text white-text right card-icons">delete</i></a> */}
													<Modal
														header={`Edit "${industry.title}" item`} className="center-align"
														trigger={<a href="#"><i className="material-icons indigo-text white-text right card-icons">create</i></a>}>
														<Textarea
															id="Textarea-12"
															label="Title"
															value={industry.title}
														/>
														<TextInput
															id="TextInput-4"
															label="File"
															type="file"
														/>
													</Modal>
													<Modal
														actions={[
															<Button flat modal="close" node="button" waves="green" className="indigo darken-1 white-text left"><i className="material-icons left card-icons">close</i>Cancel</Button>,
															<Button flat modal="close" node="button" waves="green" className="teal white-text right" onClick={ () => {console.log('Clicked!')} }><i className="material-icons left card-icons">delete</i>Delete</Button>
														]}
														header={`Delete "${industry.title}" item. Are you sure?`} className="center-align"
														trigger={<a href="#"><i className="material-icons indigo-text white-text right card-icons">delete</i></a>}>
														
													</Modal>
													
												</div>
											</div>
										</div>
									</div>

								</div>
								
						
	})

	return (
		<div  id="technologies" style={{ paddingTop: '75px', paddingLeft: '0' }} className="">
			<div className="row">
			<div className="col s12 indigo darken-1">
						<div><span className="category-title left white-text">Industries</span></div>
					</div>
				<div className="col s12">
					
					<div className="content">
						<div className="row">
								{industriesList}
								
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
						<div className="row">
							<div className="col">
								<button className="btn waves-effect waves-light" href="">
									<i className="material-icons left">add_circle_outline</i>Add industry
								</button>
							</div>
						</div>
					</div>
				</div>		
			</div>
		</div>

		

	
	)
}
