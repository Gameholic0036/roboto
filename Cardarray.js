import React from 'react';
import Cardlist from './Cardlist';


const Cardarray = ({robots}) => {
	
	return(
		<div>
			{
				robots.map((user,i) =>	{
					return(
						<Cardlist
						key={[i]}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
						/>
					);
				})
			 }
		</div>
	);
}
export default Cardarray;