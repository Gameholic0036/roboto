import React from 'react';
import './Searchtab.css';
const Searchtab = ({searchfield,searchChange}) =>{
	return(
		<div>
			<input 
			type='search' 
			placeholder='SearchRobos'
			onChange={searchChange} />

		</div>
	);
}
export default Searchtab;