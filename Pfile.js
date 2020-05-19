import React , {Component} from 'react';
import Cardarray from './Cardarray';
import {robots} from './details.js';
import Searchtab from './Searchtab';
import './Pfile.css';

class Pfile extends	Component {
	constructor(){
		super()
		this.state={
			robots:robots,
			searchfield:''
		}  
	}
	onsearchChange = (event) => {
	this.setState({searchfield:event.target.value});
	} 
	 
	render(){
		const a=this.state.robots;
		let c=[];
		a.map((user,i) =>{
		let namee=a[i].name.toLowerCase().includes(
			this.state.searchfield.toLowerCase())
		let emaile=a[i].email.toLowerCase().includes(
			this.state.searchfield.toLowerCase())
		
		if(namee || emaile)
			c.push(a[i])
})

			return(
				<div className='tc'>
				<h1 className='head'>ROBOTO</h1>
				<Searchtab searchChange={this.onsearchChange}/>
				<Cardarray robots={c}	/>
			</div>
		);
	}
}


export default Pfile;