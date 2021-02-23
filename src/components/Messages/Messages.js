import React, { useState, useEffect } from 'react'
import { Pagination, Icon } from 'react-materialize'
import DataTable from 'react-data-table-component'
// import { TablePagination } from 'react-pagination-table'
import  {columns, data} from '../Pages/Table/MessagesData'
// import { data, Header } from './MessagesData'
import SortIcon from "@material-ui/icons/ArrowDownward"

import './Messages.css'


const customStyles = {
  title: {
    style: {
			background: '#f5f5f5',
      fontColor: 'red !important',
      fontWeight: '400',
    }
  },
  rows: {
    style: {
      minHeight: '32px', // override the row height
			background: '#f5f5f5'
    }
  },
  headCells: {
    style: {
      fontSize: '16px',
      fontWeight: '500',
      textTransform: 'uppercase',
      paddingLeft: '0 8px',
			background: '#f5f5f5',
			paddingTop: '10px'
    },
  },
  cells: {
    style: {
      fontSize: '16px',
      paddingLeft: '0 8px',
			background: 'transparent !important'
    },
  },
	
	input: {
		style: {
			display: 'none'
		}
	}

};


export default function Messages() {
	const [perPage, setPerPage] = useState(20);

	return (
		<div id="messages" style={{ paddingTop: '75px', paddingLeft: '' }}>
			<div className="" style={{ height: '100vh' }}>
			<div className="row">
				<div className="col s12 indigo darken-1">
					<div><span className="category-title left white-text">Income messages</span></div>
				</div>
				<div className="col s12 m5" style={{ paddingTop: '1.5vh' }}>

				<div className="left" style={{ width: '100%' }}>
					{/* <TablePagination
						columns="name.time.date"
						perPageItemCount={ 20 }
						totalCount={ data.length  }
						arrayOption={ [["size", 'all', ', ']] }
						className="left"
						data={ data }
						headers={ Header }
					/> */}

					<div style={{ display: 'flex', flexDirection: 'column-reverse', marginTop: '-1.5vh' }}>
						<DataTable
							className="paginate-table"
							paginationPerPage={perPage}
							style={{  }}
							columns={columns}
							data={data}
							defaultSortField="title"
							sortIcon={<SortIcon />}
							pagination
							selectableRows
							customStyles={customStyles}
						/>
					</div>	
				</div>
	
{/* 				
				<Pagination
					target="#messages"
					activePage={3}
					items={5}
					leftBtn={<Icon>chevron_left</Icon>}
					rightBtn={<Icon>chevron_right</Icon>}
				/> */}

				{/* <ul class="pagination">
					<li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
					<li class="active"><a href="#!">1</a></li>
					<li class="waves-effect"><a href="#!">2</a></li>
					<li class="waves-effect"><a href="#!">3</a></li>
					<li class="waves-effect"><a href="#!">4</a></li>
					<li class="waves-effect"><a href="#!">5</a></li>
					<li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
				</ul> */}

				</div>
				<div className="col s12 m7">
						<div className="" style={{ height: '100vh', paddingTop: '1.5vh',  textAlign: 'justify' }}>
							<div className="row">
								<div className="col s6">
									<h6 className="left-align">From:<span style={{ fontWeight: '700' }}> Homer </span><span>homer.simpson@us.tv</span></h6>
								</div>
								<div className="col s6 right">
									<h6 className="right-align"><span>Feb 8, 2020, 03:03 AM</span></h6>
								</div>
							</div>
							<span id="message"><p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
								Where does it come from?</p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
								Where can I get some?<p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
							</span>
						</div>

				</div>
			</div>
		</div>
		</div>
	)
}
