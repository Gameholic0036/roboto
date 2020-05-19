import React from 'react';
import './Cardlist.css'
import 'tachyons';


const Cardlist =	(props)	=>	{
	return(
		<div className=' cdlist  bg-light-purple dib br3 ma1 pa2 shadow-3 Roboto grow'>
			<div>
				<img src={`https://robohash.org/${props.id*15}`} alt='Roboto' />
			</div>
			<div className='info'>
				<h3>{props.name}</h3>
				<h4>{props.email}</h4>
			</div>
		</div>
	);
}
export default Cardlist;